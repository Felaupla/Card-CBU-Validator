//import { useState } from "react";
import Validate from "./components/Cards/Validate";
import AppMenu from "./utils/AppMenu.jsx";
import "./App.css";
import ExcelFileUploader from "./components/Cards/Excelfileuploader.jsx";
import {
  Text,
  VStack,
  Box,
  Center,
  Flex,
  Spacer,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import CbuValidate from "./components/Cbus/CbuValidate.jsx";
import Cbufileuploader from "./components/Cbus/Cbufileuploader.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import About from "../src/pages/About/About";

function App() {
  const { isAuthenticated, user } = useAuth0();
  return (
    
    <VStack >
      <Box display="flex" alignItems="start">
        <Box display="flex" alignItems="start" >
          <AppMenu />
        </Box>
        <Box w="100%">
          {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
          {isAuthenticated ? (
            <Avatar name={user.name} src={user.picture}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          ) : (
            ""
          )}
        </Box>
      </Box>
      <Text as="b" fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        Credit Card Validator
      </Text>
      <Box m={[3, 5]} w="100%" h="15%">
        <Validate />
      </Box>
      {isAuthenticated ? 
      <Box borderRadius={20} m={[3, 5]} w="100%" h="15%">
        
      </Box>
      : ""}
      <Box borderRadius={20} m={[3, 5]} w="100%" h="15%">
        <CbuValidate />
      </Box>
      {isAuthenticated ? (
      <Box borderRadius={20} m={[3, 5]} w="100%" h="15%">
          <Cbufileuploader />
          </Box>
          ) : (
            <Text fontSize={{ base: "18px", md: "24px", lg: "32px" }}>
            Log in to validate by batch on an Excel File
          </Text>
        )}
      <Text
        color="green"
        p="1%"
        bg="green.400"
        fontSize={{ base: "16px", md: "20px", lg: "28px" }}
      >
        Your Information is safe as we do not store or access it
      </Text>
      <Center alignItems="flex-end">
      <About />
      </Center>
    </VStack>
  );
}

export default App;
