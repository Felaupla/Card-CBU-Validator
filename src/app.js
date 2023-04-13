const express = require("express");
const app = express();
const { validate } = require("../creditCardValidator.js");
const multer = require("multer");
const joi = require("joi");
const fs = require("fs");
const upload = multer({ dest: "uploads/" }); // specify the destination folder for uploaded files

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

app.post("/validateFile", upload.single("file"), (req, res) => {
  // get the uploaded file from the request object
  // read the file contents and parse the JSON data
  const fileContents = fs.readFileSync(req.file.path, "utf8");
  const cardNumbers = fileContents.split("\n");
  const results = [];
  // access the specific field you are interested in
  // Validate each credit card number
  cardNumbers.forEach((cardNumber) => {
    const validationResult = validate(cardNumber.trim(","));
    results.push(validationResult);
  });
  res.json(results);
});

module.exports = app;
