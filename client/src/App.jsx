//import { useState } from "react";
import Validate from "./components/Cards/Validate.jsx";
import "./App.css";
import ExcelFileUploader from "./components/Cards/Excelfileuploader.jsx";
import ColorModeSwitcher from "./utils/ColorModeSwitcher.jsx";
import { Text, Box, Spacer } from "@chakra-ui/react";
import CbuValidate from "./components/Cbus/CbuValidate.jsx";
import Cbufileuploader from "./components/Cbus/Cbufileuploader.jsx";

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
      <Box borderRadius={20} m={[5, 7]}>
        <CbuValidate />
      </Box>
      <Box borderRadius={20} m={[5, 7]}>
        <Cbufileuploader />
      </Box>
    </Box>
  );
}

export default App;
