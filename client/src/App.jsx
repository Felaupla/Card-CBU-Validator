import React from "react";
import { Box, SimpleGrid, Text,Tab, Tabs,TabPanel, TabPanels, TabList, Spacer } from "@chakra-ui/react";
import AppMenu from "./utils/AppMenu.jsx";
import About from "../src/pages/About/About";
import CreditCardValidator from "./pages/CreditCardValidator/CreditCardValidator";
import CbuValidator from "./pages/CbuValidator/CbuValidator";
import theme from "./utils/theme.js";
import {useAuth0} from '@auth0/auth0-react'


function App() {

 const { isAuthenticated  } = useAuth0();
  return (
    <SimpleGrid theme={theme}>
      <Box
        display="grid"
        gridTemplateRows="auto 1fr auto"
      >
        <AppMenu />
        <Spacer h='0.8vh'/>
        <Tabs size='md' variant='enclosed'>
  <TabList>
    <Tab>Credit Card Validator</Tab>
    <Tab>Cbu Validator</Tab>
  </TabList>
  <TabPanels>
  <TabPanel>
    <CreditCardValidator />
    </TabPanel>
    <TabPanel >
    <CbuValidator />
    </TabPanel>
  </TabPanels>
</Tabs>
        <Box w='100%'>
          <Text
            color="green"
            p='10px'
            bg="green.400"
            fontSize={{ base: "14px", md: "18px", lg: "24px" }}
          >
            Your Information is safe as we do not store or access it
          </Text>
        </Box>
        {isAuthenticated ? "":(<Spacer h='8vh'/>) }
        <Box d="flex" alignItems="start" alignSelf="flex-end">
          <About />
        </Box>
      </Box>
    </SimpleGrid>
  );
}

export default App;