//import { useState } from "react";
import Validate from "./components/Validate.jsx";
import "./App.css";
import ExcelFileUploader from "./components/Excelfileuploader.jsx";
import ColorModeSwitcher from "./utils/ColorModeSwitcher.jsx";
import { Text, Box, Spacer } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <ColorModeSwitcher />
      <Text as="b" fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Credit Card Validator
      </Text>
      <Box m={[5, 7]}>
        <Validate />
      </Box>
      <Spacer />
      <Box borderRadius={20} m={[5, 7]}>
        <ExcelFileUploader />
      </Box>
    </Box>
  );
}

export default App;
