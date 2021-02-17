import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterHandler from "./routes/router";
import pages from "./routes/consts/pages";
import Header from "./components/header";
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <RouterHandler pages={pages} />
  </React.StrictMode>,
  document.getElementById("root")
);
