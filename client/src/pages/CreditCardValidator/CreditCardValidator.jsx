import "./CreditCardValidator.css";
import Validate from "./components/Cards/Validate.jsx";
import ExcelFileUploader from "./components/Cards/Excelfileuploader.jsx";
import ColorModeSwitcher from "./utils/ColorModeSwitcher.jsx";
import { Text, Box, Spacer } from "@chakra-ui/react";

function CreditCardValidator() {
  return (
    <Box>
      <ColorModeSwitcher initialColorMode="dark" />
      <Text as="b" fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Credit Card Validator
      </Text>
      <Box m={[5, 7]}>
        <Validate />
      </Box>
      <Spacer />
      <Box borderRadius={20} m={[5, 7]}>
        {isAuthenticated ? (
          <ExcelFileUploader />
        ) : (
          <Text>Log in to Validate by an Excel File</Text>
        )}
      </Box>
    </Box>
  );
}

export default CreditCardValidator;
