const express = require("express");
const cors = require("cors"); // Importa el paquete cors
const app = express();
const {
  validateCard,
  validateCardToFile,
  validateCardUnique,
} = require("./cards/cardControllers");
const { validateOneCbu, validateCbus } = require("./banks/cbuControllers");

var corsOptions = {
  origin: "*",
  methods: ["POST"],
  optionsSuccessStatus: 200,
};

app.use(express.json({ limit: "5mb" }));

app.use(cors());

app.post("/validate", cors(corsOptions), validateCard());

app.post("/validatetofile", cors(corsOptions), validateCardToFile());

app.post("/validateunique", cors(corsOptions), validateCardUnique());

app.post("/validateonecbu", validateOneCbu());

app.post("/validatecbus", validateCbus());

module.exports = app;
