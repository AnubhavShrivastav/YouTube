import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./component/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from "./pages/VideoPlayer.jsx";

const CLIENT_ID =
  "1051422118866-emfokgnbcnjofnsvior33h24gfr8n6qi.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:videoId" element={<VideoPlayer />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
