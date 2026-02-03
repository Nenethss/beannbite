import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {},
      components: {
        Button: {
          borderRadius: 100,
          colorPrimary: "#000000",
          colorText: "#ffffff",
          colorBorder: "#ffffff",
          colorBorderSecondary: "#ffffff",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>,
);
