import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { io } from "socket.io-client";
const socket = io("localhost:7000");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
