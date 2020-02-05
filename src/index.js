import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  NAME: `Grand Budapest Hotel`,
  GENRE: `comedy`,
  DATE: `10.05.2009`
};

ReactDOM.render(
  <App name={Settings.NAME} genre={Settings.GENRE} date={Settings.DATE}/>,
  document.getElementById(`root`)
);
