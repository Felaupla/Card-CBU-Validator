const express = require("express");
const app = express();
const port = 3001;
const validator = require("./validate");
const validate = validator.validate;
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("API de validación de números de tarjeta de crédito");
});
app.post("/validate", async (req, res) => {
  const cardNumber = req.body;
  const valid = validate(cardNumber);
  res.json([cardNumber, valid]);
});
app.listen(`${port}`, () => {
  console.log("Server listening on http://localhost:3001");
  console.log(validate(4509950237804350));
});
