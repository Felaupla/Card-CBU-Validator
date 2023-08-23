import "./CbuValidator.css";
import ColorModeSwitcher from "./utils/ColorModeSwitcher.jsx";
import { Text, Box, Spacer } from "@chakra-ui/react";
import CbuValidate from "./components/Cbus/CbuValidate.jsx";
import Cbufileuploader from "./components/Cbus/Cbufileuploader.jsx";

function CbuValidator() {
  return (
    <Box>
      <ColorModeSwitcher initialColorMode="dark" />
      <Text as="b" fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Banking CBU Validator
      </Text>
      <Box borderRadius={20} m={[5, 7]}>
        <CbuValidate />
      </Box>
      <Spacer />
      <Box borderRadius={20} m={[5, 7]}>
        <Cbufileuploader />
      </Box>
    </Box>
  );
}

export default CbuValidator;
