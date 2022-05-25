import { Layout } from "antd";

import Content from "./Content";

export default () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header />
      <Content />
      <Layout.Footer style={{ textAlign: "center" }}>
        Created by Nick Carson
      </Layout.Footer>
    </Layout>
  );
};
