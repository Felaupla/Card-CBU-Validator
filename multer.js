const express = require('express');
const multer = require('multer');
const joi = require('joi');
const fs = require('fs');
const port= process.env.port;
const {validate} = require("./validate.js");

const app = express();
const upload = multer({ dest: 'uploads/' }); // specify the destination folder for uploaded files

app.post('/validate', upload.single('file'), (req, res) => {
  // get the uploaded file from the request object
  const file = req.file;
  
  // read the file contents and parse the JSON data
  const data = JSON.parse(fs.readFileSync(file.path, 'utf-8'));
  
  // access the specific field you are interested in
  const number = data.number;
  
  // do something with the number, such as validate it
  
  res.send('File uploaded');
});

app.listen(`${port}`, () => {
  console.log('Server started on port 3001');
});
