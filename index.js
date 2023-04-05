const express = require("express");
const app = express();
const port = 3000;
const validateCard = require("./validator");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de validación de números de tarjeta de crédito");
});
app.post("/validate", (req, res) => {
  const { cardNumber } = req.body;
  const valid = validateCard(cardNumber);
  res.json({ number, valid });
});
app.listen(`${port}`, () => {
  console.log("Server listening on http://localhost:3000");
});
