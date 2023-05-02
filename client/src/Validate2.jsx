import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Validate.css";

export default function Validate() {
  const [cardNumber, setCardNumber] = useState("");
  const [response, setResponse] = useState(null);

  const handleValidate = async () => {
    try {
      const response = await fetch("http://localhost:3001/validateunique", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ card: [cardNumber] }), // Modify request body
      });
      const data = await response.json(); // Parse response as JSON
      setResponse(data); // Set response state to boolean value
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="title">Test a CardNumber</Form.Label>
          <Form.Control
            className="input-group"
            type="text"
            placeholder="Enter a CardNumber"
            value={cardNumber.replace(/.(?=.{6})/g, "*")}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={() => handleValidate()}>
          Validate
        </Button>
      </Form>
      {response !== null && (
        <p className={response ? "success" : "error"}>
          {response ? "Valid card number" : "Invalid card number"}
        </p>
      )}
    </div>
  );
}
