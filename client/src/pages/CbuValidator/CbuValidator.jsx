import "./CbuValidator.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Text, Box, Spacer } from "@chakra-ui/react";
import CbuValidate from "../../components/Cbus/CbuValidate";
import Cbufileuploader from "../../components/Cbus/Cbufileuploader.jsx";

function CbuValidator() {
  const {isAuthenticated} = useAuth0()
  return (
    <Box>
      {/* <Text as="b" fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Banking CBU Validator
      </Text> */}
      <Box borderRadius={20} m={[3, 5]}>
        <CbuValidate />
      </Box>
      <Box borderRadius={20} m={[2, 4]}>
        {isAuthenticated ? (
          <Cbufileuploader />
        ) : (
          <Text>Log in to Validate by an Excel File</Text>

        )}
        {isAuthenticated ? 
          (""):(<Spacer/>)}
        
      </Box>


    </Box>
  );
}

export default CbuValidator;
