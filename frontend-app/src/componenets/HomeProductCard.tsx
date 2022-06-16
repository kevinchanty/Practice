import { Card, Checkbox } from "antd";
import Meta from "antd/lib/card/Meta";
import { InfoCircleOutlined, BarsOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

type HomeProductCard = {
  id: number;
  name: string;
  price: string;
  code: string;
  imageUrl: string;
  checked: boolean;
  handleCheckBoxOnChange: (targetId: number, select: boolean) => void;
};

function HomeProductCard(props: HomeProductCard) {
  const {
    id,
    name,
    price,
    code,
    imageUrl,
    checked,
    handleCheckBoxOnChange: handleCheckBoxOnChage,
  } = props;
  const [isShowPreview, setIsShowPreview] = useState(false);

  const details = (
    <>
      Price: {price ?? "N/A"}
      <br />
      Code: {code}
    </>
  );

  return (
    <Card
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={
            imageUrl ??
            "https://via.placeholder.com/240x240.png?text=NO IMAGE :("
          }
        />
      }
      actions={[
        <Checkbox
          checked={checked}
          onChange={(e) => {
            handleCheckBoxOnChage(id, e.target.checked);
          }}
        ></Checkbox>,
        <InfoCircleOutlined
          key="preview"
          onClick={() => setIsShowPreview((value) => !value)}
          data-testid="details-button"
        />,
        <Link to={`./products/${id}`}>
          <BarsOutlined key="detail" />
        </Link>,
      ]}
    >
      <Meta
        title={name}
        description={isShowPreview ? details : ""}
        style={{ wordBreak: "break-all" }}
      />
    </Card>
  );
}

export default HomeProductCard;
