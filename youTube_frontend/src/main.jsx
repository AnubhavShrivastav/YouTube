import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID =
  "1051422118866-emfokgnbcnjofnsvior33h24gfr8n6qi.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>     
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
