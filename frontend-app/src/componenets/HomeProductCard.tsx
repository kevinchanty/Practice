import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { InfoCircleOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { useState } from "react";

function HomeProductCard() {
  const [isShowPreview, setIsShowPreview] = useState(false);
  return (
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
      <Meta title="testing" description={isShowPreview ? "details" : ""} />
    </Card>
  );
}

export default HomeProductCard;
