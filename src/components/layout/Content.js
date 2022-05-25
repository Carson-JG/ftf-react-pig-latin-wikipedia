import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { Root, PageOne } from "../pages";

export default ({}) => {
  return (
    <Layout.Content style={{ padding: "0 50px" }}>
      <div
        style={{
          minHeight: "100%",
          padding: "24px",
          background: "#fff",
        }}
      >
        <Switch>
          <Route path="/page-1">
            <PageOne />
          </Route>
          <Route path="/">
            <Root />
          </Route>
        </Switch>
      </div>
    </Layout.Content>
  );
};
