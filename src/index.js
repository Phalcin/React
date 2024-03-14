import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function add(a, b) {
  console.log(a + b);
}

function add(a, b) {
  return a + b;
}
