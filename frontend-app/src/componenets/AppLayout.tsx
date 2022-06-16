import { Layout, Menu } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import { ReactNode } from "react";

const AppLayout: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: 1,
              label: "Home",
            },
          ]}
        />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {props.children}
      </Content>
      <Footer style={{ textAlign: "center" }}>Practice by hktv</Footer>
    </Layout>
  );
};

export default AppLayout;
