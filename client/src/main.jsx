import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Auth0ProviderModule } from "./auth0-provider.jsx";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Auth0ProviderModule>
          <App />
        </Auth0ProviderModule>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
