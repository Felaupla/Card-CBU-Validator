import { useState } from "react";
import "./CbuValidate.css";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Center,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

export default function CbuValidate() {
  const [cbuNumber, setCbuNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //const deploy_host = import.meta.env.VITE_DEPLOY_HOST;
  const deploy_host = "https://validatecreditcard-production.up.railway.app";
  //const deploy_host = "http://localhost:3001";

  const handleValidate = async () => {
    try {
      if (cbuNumber.trim() === "") {
        setResponse({
          valid: false,
          type: "Unknown",
          message: "Card number must not be empty.",
        });
        return;
      }
      if (cbuNumber.length < 22) {
        setResponse({
          valid: false,
          type: "Unknown",
          message: "Incomplete CBU number.",
        });
        return;
      }
      const response = await fetch(`${deploy_host}/validateonecbu`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cbu: cbuNumber }),
      });

      const data = await response.json();
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
      p="4"
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
              placeholder="Validate a Cbu Number"
              value={cbuNumber}
              type={show ? "text" : "password"}
              onInput={handleInputChange} // Use onInput to handle both paste and typing
              m={[2, 3]}
              h="10"
              borderRadius="8px"
            />
            <InputRightElement>
              <Button m={[2, 3]} size="md" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Tooltip>
        <Button onClick={handleValidate}>Validate</Button>
      </Center>
      {response && (
        <Box>
          <Text
            className={response.isValid ? "success" : "error"}
            fontSize="2xl"
          >
            CBU is {response.isValid ? "Valid" : "Invalid"}
          </Text>
          {response.isValid && (
            <Text fontSize="2xl">Bank Name: {response.bankName}</Text>
          )}
        </Box>
      )}
    </Box>
  );
}
