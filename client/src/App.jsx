//import { useState } from "react";
import Validate from "./components/Cards/Validate";
import AppMenu from "./utils/AppMenu.jsx";
import "./App.css";
import ExcelFileUploader from "./components/Cards/Excelfileuploader.jsx";
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
        <Box>
          <AppMenu />
        </Box>
        <Spacer />
        <Box>
          {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
          {isAuthenticated ? (
            <Avatar name={user.name} src={user.picture}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          ) : (
            ""
          )}
        </Box>
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
            Log in to validate by batch on an Excel File
          </Text>
        )}
      </Box>
      <Text
        color="green"
        bg="green.400"
        fontSize={{ base: "16px", md: "20px", lg: "28px" }}
      >
        Your Information is safe as we do not access it or store it
      </Text>
    </Box>
  );
}

export default App;
