import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const RootEl = document.getElementById("root");
ReactDom.createRoot(RootEl).render(<App />);
