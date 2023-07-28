import { useState } from "react";
import "./Validate.css";
import { Input, Button, Box, Text } from "@chakra-ui/react";
import axios from "axios";

export default function Validate() {
  const [cardNumber, setCardNumber] = useState("");
  const [response, setResponse] = useState(null);
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

      const response = await axios.post(
        `${deploy_host}/validateunique`,
        { card: [cardNumber] },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      setResponse({
        valid: data.valid,
        type: data.cardType,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box border="4px" borderColor="gray.300" borderRadius={20}>
        <Input
          className="input-group"
          placeholder="Test a CardNumber"
          value={cardNumber.replace(/.(?=.{6})/g, "*")}
          onChange={(e) => setCardNumber(e.target.value)}
          m={[2, 3]}
          w="60%"
        />
        <Button onClick={handleValidate}>Validate</Button>
      </Box>
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

