import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter } from "react-router-dom";
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider } from "./context/index.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThirdwebProvider clientId={import.meta.env.VITE_CLIENT_ID}  supportedChains={[Sepolia]}>
      <BrowserRouter>
      <StateContextProvider>
                <App /> 
      </StateContextProvider>
      </BrowserRouter>
    </ThirdwebProvider>
  </StrictMode>
);
