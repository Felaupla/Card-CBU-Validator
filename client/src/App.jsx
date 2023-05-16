//import { useState } from "react";
import Validate from "./components/Validate.jsx";
import "./App.css";
import ExcelFileUploader from "./components/Excelfileuploader.jsx";

function App() {
  return (
    <>
      <div className="card">
        <div className="component">
          <h1>Credit Card Validator</h1>
          <Validate />
        </div>
        <div className="component">
          <h1>Credit Card Validator by file</h1>
          <ExcelFileUploader />
        </div>
      </div>
    </>
  );
}

export default App;
