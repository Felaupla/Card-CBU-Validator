const express = require("express");
const app = express();
// ojo acá, necesitaba de un archivo env
const port = process.env.port || 3001;
// ojo que cambié el nombre del archivo
const { validate } = require("./creditCardValidator.js");

app.use(express.json());

app.post("/validate", async (req, res) => {
  let cardNumbers = req.body.cards;
  let response = {
    // un Set para eliminar duplicados (pero pierdo el orden)
    // también podría haber usado un []
    valid: new Set(),
    invalid: new Set(),
  };
  for (let cardNumber of cardNumbers) {
    let isValid = validate(cardNumber);
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

app.listen(`${port}`, () => {
  console.log("Server listening on http://localhost:3001");
});
