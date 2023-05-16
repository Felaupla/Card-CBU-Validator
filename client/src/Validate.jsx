import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Validate.css";

export default function Validate() {
  const [cardNumber, setCardNumber] = useState("");
  const [response, setResponse] = useState(null);

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

      const response = await fetch(
        "https://validatecreditcard-production.up.railway.app/validateunique",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ card: [cardNumber] }), // Modify request body
        }
      );
      const data = await response.json(); // Parse response as JSON
      setResponse({
        valid: data,
        type: cardType,
      }); // Set response state to object with boolean value and card type
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form className="validateField">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="title">Test a CardNumber</Form.Label>
          <></>
          <Form.Control
            className="input-group"
            type="text"
            placeholder="Enter a CardNumber"
            value={cardNumber.replace(/.(?=.{6})/g, "*")}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleValidate}>
          Validate
        </Button>
      </Form>
      {response !== null && (
        <p className={response.valid ? "success" : "error"}>
          {response.valid
            ? `Valid ${response.type} Card Number`
            : response.message}
        </p>
      )}
    </div>
  );
}
