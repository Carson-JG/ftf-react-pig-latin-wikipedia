import { Layout } from "antd";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default ({ navigation }) => {
  const layoutStyle = { minHeight: "100vh" };
  return (
    <Layout style={layoutStyle}>
      <Header navigation={navigation} />
      <Content />
      <Footer />
    </Layout>
  );
};
