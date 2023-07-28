import { useState } from "react";
import "./Validate.css";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Center,
  Text,
  HStack,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

export default function Validate() {
  const [cardNumber, setCardNumber] = useState("");
  const [response, setResponse] = useState(null);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //const deploy_host = import.meta.env.VITE_DEPLOY_HOST;
  const deploy_host = "https://validatecreditcard-production.up.railway.app";

  const handleValidate = async () => {
    try {
      if (cardNumber.trim() === "") {
        setResponse({
          valid: false,
          type: "Unknown",
          message: "Card number must not be empty.",
        });
        return;
      }
      if (cardNumber.length < 15) {
        setResponse({
          valid: false,
          type: "Unknown",
          message: "Incomplete card number.",
        });
        return;
      }

      // Detect card type
      let cardType;
      if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
        cardType = "Visa";
      } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
        cardType = "Mastercard";
      } else if (/^3[47][0-9]{13}$/.test(cardNumber)) {
        cardType = "American Express";
      } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(cardNumber)) {
        cardType = "Diners Club";
      } else {
        cardType = "Unknown";
      }

      const response = await fetch(`${deploy_host}/validateunique`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ card: [cardNumber] }), // Modify request body
      });
      const data = await response.json(); // Parse response as JSON
      setResponse({
        valid: data,
        type: cardType,
      }); // Set response state to object with boolean value and card type
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Handle both paste and typing events
    if (e.clipboardData) {
      // If clipboardData is available, set cardNumber with the plain text content from the clipboard
      const pastedValue = e.clipboardData.getData("text/plain");
      setCardNumber(pastedValue);
    } else {
      // For typing events, handle cardNumber masking manually
      setCardNumber(inputValue);
    }
    setResponse(null);
  };
  return (
    <Box
      wrap="no-wrap"
      borderColor="gray.300"
      boxShadow="dark-lg"
      p="4"
      rounded="2xl"
    >
      <Center>
        <InputGroup size="xl" w="67%" borderRadius="8px">
          <Input
            className="input-group"
            placeholder="Test a CardNumber"
            value={cardNumber}
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
        {/* replace(/.(?=.{6})/g, "*") */}
        <Button onClick={handleValidate}>Validate</Button>
      </Center>
      {response !== null && (
        <Text className={response.valid ? "success" : "error"}>
          {response.valid
            ? `Valid ${response.type} Card Number`
            : response.message || "Invalid Card Number"}
        </Text>
      )}
    </Box>
  );
}
