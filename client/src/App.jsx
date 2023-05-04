//import { useState } from "react";
import Validate from "./Validate.jsx";
import "./App.css";
import ValidateToFile from "./Validatefile.jsx";

function App() {
  return (
    <>
      <div className="card">
        <h1>Credit Card Validator</h1>
        <Validate />
      </div>
      <div>
        <h1>Credit Card Validator by file</h1>
        <ValidateToFile />
      </div>
    </>
  );
}

export default App;
