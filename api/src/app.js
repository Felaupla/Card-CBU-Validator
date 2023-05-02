const express = require("express");
const { validate } = require("./service");
const cors = require("cors"); // Importa el paquete cors
const app = express();
const {
  validateCard,
  validateCardToFile,
  validateCardUnique,
} = require("./controllers");

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

module.exports = app;
