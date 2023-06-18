//import { useState } from "react";
import Validate from "./components/Validate.jsx";
import "./App.css";
import ExcelFileUploader from "./components/Excelfileuploader.jsx";
import ColorModeSwitcher from "./utils/ColorModeSwitcher.jsx";
import { Text, Box} from "@chakra-ui/react";

function App() {
  return (
    <>
          <ColorModeSwitcher/>
          <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Credit Card Validator</Text>
        <Box m={[2, 3]}>
          <Validate />
        </Box>
        <Box border='4px' borderColor='gray.300' borderRadius={20} m={[2, 3]}>
          <ExcelFileUploader />
        </Box>
   
    </>
  );
}

export default App;
