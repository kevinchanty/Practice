import { Alert, Card, PageHeader } from "antd";

import Meta from "antd/lib/card/Meta";
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
      Price: {product?.price?.formattedValue ?? "N/A"}
      <br />
      Quantity: {product?.quantity}
      <br />
      Code: {product?.code}
    </>
  );

  return isLoading ? (
    <>Loading...</>
  ) : isError ? (
    <Alert message={error} type="warning" style={{ marginTop: "10px" }} />
  ) : (
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
