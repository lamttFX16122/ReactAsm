import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { BrowserRouter as Router } from "react-router-dom";
//import { Router } from "react-router-dom";
import history from './history';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <div>
    <Router history={history}>
      <App />
    </Router>
  </div>

  // </React.StrictMode>
);
//  "start": "set port=4200 && react-scripts --openssl-legacy-provider start",
// {
//     "production": [
//         ">0.2%",
//         "not dead",
//         "not op_mini all"
//     ],
//     "development": [
//         "last 1 chrome version",
//         "last 1 firefox version",
//         "last 1 safari version"
//     ]
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
