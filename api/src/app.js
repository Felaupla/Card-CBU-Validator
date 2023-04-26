const express = require("express");
const {validate} = require ("../creditCardValidator")
const app = express();

app.use(express.json({ limit: "3mb" }));

app.post("/validate", async (req, res) => {
  let cardNumbers = req.body.cards;
  let response = {
    // un Set para eliminar duplicados (pero pierdo el orden)
    // también podría haber usado un []
    valid: new Set(),
    invalid: new Set(),
  };
  for (let cardNumber of cardNumbers) {
    let result= validate(cardNumber)
    let isValid = result.response
    if (isValid) {
      // si fuese un array, sería push
      response.valid.add(cardNumber);
    } else {
      response.invalid.add(cardNumber);
    }
  }
  res.json({
    // esto es para entregar el resultado (quitar los elementos del set en un array)
    valid: [...response.valid],
    invalid: [...response.invalid],

  });
  });


module.exports = app;
