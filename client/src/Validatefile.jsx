import React, { useState } from "react";
import readXlsxFile from "read-excel-file";

export default function ValidateToFile() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setResponse(null);
    setError(null);
  };

  const sendRequest = async () => {
    if (!file) {
      return;
    }

    const rows = await readXlsxFile(file);
    const cardNumbers = rows
      .map((row) => row[0])
      .filter((value) => value !== undefined);

    const response = await fetch("http://localhost:3001/validatetofile", {
      method: "POST",
      body: JSON.stringify({ cards: cardNumbers }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const textResponse = await response.text();
      setResponse(textResponse);
      setError(null);
    } else {
      setResponse(null);
      setError("An error occurred while fetching data from the server.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />

      <button onClick={sendRequest} disabled={!file}>
        Submit
      </button>

      {response && (
        <div>
          <h2>Response</h2>
          <p>{response}</p>
        </div>
      )}

      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
