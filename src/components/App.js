import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import Layout from "./layout";

const App = () => (
  <StrictMode>
    <Layout />
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById("root"));
