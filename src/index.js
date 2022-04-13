import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* Passing props to instantiated App component */}
    <App fullName={["Ayman", "Alexan"]} />
  </StrictMode>
);
