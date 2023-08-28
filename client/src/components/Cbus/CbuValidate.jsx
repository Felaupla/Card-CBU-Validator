import { useState } from "react";
import "./CbuValidate.css";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Divider,
  Button,
  Box,
  Center,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
const VITE_DEPLOY_HOST = import.meta.env.VITE_DEPLOY_HOST;

export default function CbuValidate() {
  const [cbuNumber, setCbuNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  const handleValidate = async () => {
    try {
      if (cbuNumber.trim() === "") {
        setResponse({
          valid: false,
          message: "Cbu number must not be empty.",
        });
        return response.message;
      }
      if (cbuNumber.length > 22) {
        setResponse({
          valid: false,
          message: "CBU must have 22 digits",
        });
        return response.message;
      }
      if (cbuNumber.length < 22) {
        setResponse({
          valid: false,
          message: "Incomplete CBU",
        });
        return response.message;
      }
      if (cbuNumber === "0000000000000000000000") {
        setResponse({
          valid: false,
          message: "Invalid CBU number.",
        });
        return response.message;
      }
      const response = await fetch(`${VITE_DEPLOY_HOST}/validateonecbu`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cbu: cbuNumber }),
      });
  
      const data = await response.json();
  
      if (!data.isValid) {
        setResponse({
          valid: false,
          message: "Invalid CBU number.", // You can customize this message as needed
        });
        return response.message; // This might need to be removed if not needed
      }
  
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Handle both paste and typing events
    if (e.clipboardData) {
      // If clipboardData is available, set cardNumber with the plain text content from the clipboard
      const pastedValue = e.clipboardData.getData("text/plain");
      setCbuNumber(pastedValue);
    } else {
      // For typing events, handle cardNumber masking manually
      setCbuNumber(inputValue);
    }
    setResponse(null);
  };
  return (
    <Box
      wrap="no-wrap"
      borderColor="gray.600"
      boxShadow="dark-lg"
      p="1"
      rounded="xl"
    >
      <Text as="b" fontSize={{ base: "20px", md: "30px", lg: "40px" }}>
        Validate a CBU Number
      </Text>
      <Center>
        <Tooltip
          hasArrow
          label="Insert CBU Number of Argentina without hyphens"
          bg="blue.500"
        >
          <InputGroup size="xl" w="67%" borderRadius="8px">
            <Input
              className="input-group"
              placeholder="22 numeric digits"
              value={cbuNumber}
              type={show ? "text" : "password"}
              onInput={handleInputChange} // Use onInput to handle both paste and typing
              m={[2, 3]}
              h="10"
              borderRadius="8px"
            />
            <InputRightElement>
              <IconButton
                icon={show ? <LockIcon /> : <UnlockIcon />}
                opacity={4}
                m={[2, 3]}
                size="md"
                onClick={handleClick}
              ></IconButton>
            </InputRightElement>
          </InputGroup>
        </Tooltip>
        <Button onClick={handleValidate}>Validate</Button>
      </Center>
      {response && (
        <Box>
          <Text
            as="b"
            className={response.isValid ? "success" : "error"}
            fontSize="2xl"
          >
            {response.message}
          </Text>
          {response.isValid && (
            <Text className="success" as="b" fontSize="2xl">
              Valid CBU, Bank Name: {response.bankName}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
}
