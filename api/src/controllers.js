const express = require("express");
const {validate} = require ("../creditCardValidator")
const app = express();
const ExcelJS = require('exceljs');

function validateCard () {
    return async function (req, res)  {
    try {
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
    } catch (error) {
        // Code to handle the error
        console.log("An error occurred: ", error.message);
      }
};
}

function validateCardToFile () {
    return async function (req, res)  {
    try {
            let cardNumbers = req.body.cards;
            let response = {
                valid: [],
            invalid: [],
        };
  
    for (let cardNumber of cardNumbers) {
      let result = validate(cardNumber);
      let isValid = result.response;
      if (isValid) {
        response.valid.push(cardNumber);
      } else {
        response.invalid.push(cardNumber);
      }
    }

    // create a new workbook
    const workbook = new ExcelJS.Workbook();
  
    // create a new sheet for valid cards
    const validSheet = workbook.addWorksheet('Valid Cards');

    validSheet.getColumn('A').numFmt = '@';
    
    // add header row
    validSheet.addRow(['Card Number']);
    // add data rows
    response.valid.forEach((cardNumber) => {
      validSheet.addRow([cardNumber.toString()]);
      
    });
  
    // create a new sheet for invalid cards
    const invalidSheet = workbook.addWorksheet('Invalid Cards');
    invalidSheet.getColumn('A').numFmt = '@';
        // add header row
    invalidSheet.addRow(['Card Number']);
    // add data rows
    response.invalid.forEach((cardNumber) => {
      invalidSheet.addRow([cardNumber.toString()]);
    });

    // save the workbook as an Excel file
    workbook.xlsx.writeFile('./uploads/cards.xlsx').then(() => {
      console.log('Excel file saved!');
    });
  
    res.send("Excel file saved on ./uploads");
        } catch (error) {
            // Code to handle the error
        console.log("An error occurred: ", error.message);
        }

    }
}

module.exports = {validateCard,
     validateCardToFile
    }
