import { Breadcrumb, Card } from "antd";

import { InfoCircleOutlined, AlignLeftOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { useState } from "react";

export const ProductDetails: React.FunctionComponent = () => {
  const [isShowPreview, setIsShowPreview] = useState(false);

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Card
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://images.hktv-img.com/images/HKTV/18230/ST_Sony_Xperia1_64_JP_Black_main_44326701_20200626130911_01_300.jpg"
          />
        }
        actions={[
          <InfoCircleOutlined
            key="preview"
            onClick={() => setIsShowPreview((value) => !value)}
            color="#1890ff"
          />,
          <AlignLeftOutlined key="detail" />,
        ]}
      >
        <Meta
          // import.meta.env.VITE_BACKEND
          title="this is product details"
          description={isShowPreview ? "details" : ""}
        />
      </Card>
    </>
  );
};

export default ProductDetails;
