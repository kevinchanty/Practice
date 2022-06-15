import { useState } from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            {
              key: 1,
              label: "Main",
            },
          ]}
        />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />ˇ
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>Practice by hktv</Footer>
    </Layout>
  );
}

export default App;
