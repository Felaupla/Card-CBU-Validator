import {
  Box,
  SimpleGrid,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  Spacer,
} from "@chakra-ui/react";
import AppMenu from "./utils/AppMenu.jsx";
import About from "../src/pages/About/About";
import CreditCardValidator from "./pages/CreditCardValidator/CreditCardValidator";
import CbuValidator from "./pages/CbuValidator/CbuValidator";
import theme from "./utils/theme.js";

function App() {
  return (
    <SimpleGrid theme={theme}>
      <Box display="grid" gridTemplateRows="auto 1fr auto">
        <AppMenu />
        <Spacer h="0.8vh" />
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Credit Card Validator</Tab>
            <Tab>Cbu Validator</Tab>
            <Tab>About</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CreditCardValidator />
            </TabPanel>
            <TabPanel>
              <CbuValidator />
            </TabPanel>
            <TabPanel>
              <About />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </SimpleGrid>
  );
}

export default App;
