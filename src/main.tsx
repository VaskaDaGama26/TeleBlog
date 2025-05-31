import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.module.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
