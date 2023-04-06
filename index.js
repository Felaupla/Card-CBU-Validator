const express = require("express");
const app = express();
const port = 3001;
const {validate} = require("./validate.js");

app.use(express.json());

app.post("/validate", async (req, res) => {
  const number = req.body.cardNumber;
  const { response } = validate(number);
  res.json({ number:number, response:response });
});
app.listen(`${port}`, () => {
  console.log("Server listening on http://localhost:3001");
  console.log(validate(4509950237804350));
});
