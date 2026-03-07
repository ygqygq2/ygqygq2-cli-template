import "./index.css";

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom";

import App from "./app";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <Suspense>
          <App />
        </Suspense>
      </HashRouter>
    </HelmetProvider>
  </StrictMode>
);
