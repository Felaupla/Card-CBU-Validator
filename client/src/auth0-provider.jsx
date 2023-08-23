import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
const VITE_REACT_APP_AUTH0_DOMAIN = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const VITE_REACT_APP_AUTH0_CLIENT_ID = import.meta.env
  .VITE_REACT_APP_AUTH0_CLIENT_ID;

export const Auth0ProviderModule = ({ children }) => {
  return (
    <Auth0Provider
      domain={VITE_REACT_APP_AUTH0_DOMAIN}
      clientId={VITE_REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};
