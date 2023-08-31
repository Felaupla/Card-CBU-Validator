import "./CreditCardValidator.css";
import Validate from "../../components/Cards/Validate";
import { useAuth0 } from "@auth0/auth0-react";
import ExcelFileUploader from "../../components/Cards/Excelfileuploader.jsx";
import ColorModeSwitcher from "../../utils/ColorModeSwitcher";
import { Text, Box } from "@chakra-ui/react";

function CreditCardValidator() {

  const {isAuthenticated }= useAuth0()
  return (
    <Box w='100%'>
      {/* <Text as="b" fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Credit Card Validator
      </Text> */}
      <Box m={[2, 4]}>
        <Validate />
      </Box>
      <Box borderRadius={20} m={[2, 4]}>
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
