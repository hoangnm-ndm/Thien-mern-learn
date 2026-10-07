import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const root = document.getElementById("root");
const virtualELement = createRoot(root);
virtualELement.render(<h1>Hello</h1>);

// * Virtual DOM
