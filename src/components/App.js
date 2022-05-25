import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import "../assets/style.css";

import Layout from "./layout";

const App = () => (
  <StrictMode>
    <div id="app">
      <Layout />
    </div>
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root"));
