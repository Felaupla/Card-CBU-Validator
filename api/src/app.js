const express = require("express");
const {validate} = require ("../creditCardValidator")
const app = express();
const { validateCard, validateCardToFile } = require("./controllers");

app.use(express.json({ limit: "3mb" }));

app.post("/validate", validateCard());

app.post("/validatetofile", validateCardToFile()); 


module.exports = app;
