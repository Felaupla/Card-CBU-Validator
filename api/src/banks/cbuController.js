const { isValid } = require("./cbuService");
const banks = require("./bankCodes");

function validateCbu() {
  return async function (req, res) {
    try {
      const cbuNumber = req?.body?.cbu;

      // Check if cbuNumber is provided
      if (!cbuNumber) {
        res.status(400).json({ error: "cbuNumber is required" });
        return;
      }

      // Check if CBU number has the correct format (for example, 22 digits)
      if (cbuNumber.length !== 22) {
        res.status(400).json({ error: "Invalid CBU format" });
        return;
      }

      // Check if CBU number consists of only numeric characters
      if (!/^\d+$/.test(cbuNumber)) {
        res
          .status(400)
          .json({ error: "CBU number must contain only numeric characters" });
        return;
      }

      // Additional verifications or criteria can be added here
      // For example, you could check if the CBU belongs to a specific bank or region

      // Assuming you have an `isValid` function that checks if the CBU is valid
      const validationResult = isValid(cbuNumber);
      res.json(validationResult);
    } catch (error) {
      // Code to handle the error
      console.log("An error occurred: ", error.message);
      res.status(500).json({ error: "An internal server error occurred" });
    }
  };
}

module.exports = { validateCbu };
