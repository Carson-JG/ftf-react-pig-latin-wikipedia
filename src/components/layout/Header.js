import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

export default ({ navigation }) => {
  const { pathname: path } = location;

  return (
    <Layout.Header>
      <Menu mode="horizontal" defaultSelectedKeys={[path]}>
        {navigation.map(({ to, label }) => {
          return (
            <Menu.Item key={to}>
              <Link to={to}>{label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Header>
  );
};
