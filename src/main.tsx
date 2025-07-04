import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/redux-store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Redux */}
    <Provider store={reduxStore}>
        <App />
    </Provider>
  </StrictMode>
);
