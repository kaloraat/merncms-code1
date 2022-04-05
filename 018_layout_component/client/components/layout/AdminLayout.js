import { Layout } from "antd";

const { Content, Sider } = Layout;

function AdminLayout({ children }) {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
