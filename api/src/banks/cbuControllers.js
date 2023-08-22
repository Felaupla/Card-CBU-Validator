const { isValid, getBankName } = require("./cbuService");
const { banks } = require("./bankCodes");

function validateOneCbu() {
  return async function (req, res) {
    try {
      const cbuNumber = req?.body?.cbu;

      // Check if cbuNumber is provided
      if (!cbuNumber) {
        res.status(400).json({ error: "cbuNumber is required" });
        return;
      }
      if (cbuNumber === 0) {
        res.status(400).json({ error: "Invalid CBU number" });
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

function validateCbus() {
  return async function (req, res) {
    try {
      const cbuNumbers = req.body.cbus;
      const validationResults = [];

      cbuNumbers.forEach((cbu) => {
        if (!/^[0-9]{22}$/.test(cbu)) {
          validationResults.push({
            cbu,
            isValid: false,
            error: "Invalid CBU format",
          });
          return; // Skip further validation for this CBU
        }
        if (cbu === 0) {
          validationResults.push({
            cbu,
            isValid: false,
            error: "Invalid CBU number",
          });
          return; // Skip further validation for this CBU
        }
        const isValidCbu = isValid(cbu);
        if (isValidCbu.isValid) {
          const bankName = getBankName(cbu, banks);
          validationResults.push({ cbu, isValid: true, bankName });
        } else {
          validationResults.push({ cbu, isValid: false });
        }
      });
      res.json({ validationResults });
    } catch (error) {
      // Code to handle the error
      console.log("An error occurred: ", error.message);
    }
  };
}
module.exports = { validateOneCbu, validateCbus };
