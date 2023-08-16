const {
  isValid,
} = require('./CbuService')
const banks = require("./bankCodes")


function validateCbu() {
  return async function (req, res) {
    try {
      const cbuNumber = req?.body?.cbu;

      if (!cbuNumber) {
        res.status(400).json({ error: "cbuNumber is required" });
      } else {
        const validationResult = isValid(cbuNumber);
        res.json(validationResult);
      }
    } catch (error) {
      // Code to handle the error
      console.log("An error occurred: ", error.message);
    }
  };
}
module.exports= {validateCbu};