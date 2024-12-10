
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import AudiContext from "./context/AudiContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AudiContext>
      <App />
    </AudiContext>
  </BrowserRouter>
);
