import { Card, PageHeader } from "antd";

import Meta from "antd/lib/card/Meta";
import { useState } from "react";
import { useFetch } from "../hook/useFetch";
import { fetchProduct } from "../request/request";
import { useNavigate, useParams } from "react-router-dom";

export const ProductDetails: React.FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
    isError,
  } = useFetch(() => fetchProduct(id));

  const details = (
    <>
      Brand Name: {product?.brandName}
      <br />
      Price: {product?.price?.formattedValue}
      <br />
      Quantity: {product?.quantity}
      <br />
      Code: {product?.code}
    </>
  );

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate("..")}
        title="Product Details"
        subTitle={product?.code}
      />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{ width: 480 }}
          cover={
            <img
              alt="example"
              src={
                product?.images?.[0]?.url ??
                "https://via.placeholder.com/240x240.png?text=NO IMAGE :("
              }
            />
          }
        >
          <Meta title={product?.name} description={details} />
        </Card>
      </div>
    </>
  );
};

export default ProductDetails;
