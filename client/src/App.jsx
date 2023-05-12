//import { useState } from "react";
import Validate from "./Validate.jsx";
import "./App.css";
import ExcelFileUploader from "./Excelfileuploader.jsx";
import { Card } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="card">
        <Card>
        <h1>Credit Card Validator</h1>
        <Validate />
        </Card>
        <Card>
        <h1>Credit Card Validator by file</h1>
        < ExcelFileUploader />
        </Card>
      </div>
    </>
  );
}

export default App;
