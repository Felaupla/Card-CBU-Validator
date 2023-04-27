import React, { useState } from 'react';
import XLSX from 'xlsx';

function App() {
  const [cards, setCards] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const cardData = XLSX.utils.sheet_to_json(worksheet);
      const cardNumbers = cardData.map((card) => card.cardNumber);
      setCards(cardNumbers);
    };
    reader.readAsBinaryString(file);
  };

  const handleCardSearch = () => {
    // Send a POST request with the extracted card numbers to your API endpoint
  fetch('https://example.com/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestBody)
})
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleCardSearch}>Search Cards</button>
    </div>
  );
}
}
export default App;
