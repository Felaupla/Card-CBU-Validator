import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function ValidateFile() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const handleFileChange = (files) => {
    setFile(files[0]);
  };

  const handleValidate = async () => {
    try {
      const formData = new FormData();
      formData.append("cards", file);
      const res = await axios.post(
        "http://localhost:3001/validatetofile",
        formData
      );
      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formFile">
          <Form.Label>Excel file</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => handleFileChange(e.target.files)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleValidate}>
          Validate
        </Button>
      </Form>
      <div>{response}</div>
    </div>
  );
}
