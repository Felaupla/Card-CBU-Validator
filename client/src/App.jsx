//import { useState } from "react";
import Validate from "./components/Cards/Validate.jsx";
import "./App.css";
import ExcelFileUploader from "./components/Cards/Excelfileuploader.jsx";
import ColorModeSwitcher from "./utils/ColorModeSwitcher.jsx";
import {
  Text,
  Box,
  Spacer,
  Avatar,
  AvatarBadge,
  Flex,
  HStack,
} from "@chakra-ui/react";
import CbuValidate from "./components/Cbus/CbuValidate.jsx";
import Cbufileuploader from "./components/Cbus/Cbufileuploader.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./utils/Login.jsx";
import { LogoutButton } from "./utils/Logout.jsx";

function App() {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Box>
      <Flex>
        <HStack p="20px">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          {isAuthenticated ? (
            <Avatar name={user.name} src={user.picture}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          ) : (
            ""
          )}
        </HStack>
        <ColorModeSwitcher initialColorMode="dark" p="20px" />
      </Flex>

      <Text as="b" fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Credit Card Validator
      </Text>
      <Box m={[5, 7]}>
        <Validate />
      </Box>
      <Spacer />
      <Box borderRadius={20} m={[5, 7]}>
        {isAuthenticated ? <ExcelFileUploader /> : ""}
      </Box>
      <Box borderRadius={20} m={[5, 7]}>
        <CbuValidate />
      </Box>
      <Box borderRadius={20} m={[5, 7]}>
        {isAuthenticated ? (
          <Cbufileuploader />
        ) : (
          <Text fontSize={{ base: "18px", md: "24px", lg: "32px" }}>
            Log in to validate by an Excel File
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default App;
