import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Auth/firebase.jsx";
import { storeRedux } from "./redux/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={storeRedux}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
);
