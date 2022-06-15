import { Alert, Button, List, Pagination, Space, Typography } from "antd";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import HomeProductCard from "../componenets/HomeProductCard";
import { useFetch } from "../hook/useFetch";
import { fetchAllProducts } from "../request/request";

export function Home() {
  const { data, isLoading, isError, error } = useFetch(fetchAllProducts);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [selected, setSelected] = useState<number[]>([]);

  const products = useMemo<any[]>(() => {
    // length = 14
    if (data) {
      return data;
    }
    return [];
  }, [data]);

  const handleSelectChange = (targetId: number, select: boolean) => {
    if (select) {
      setSelected((selected) => [...selected, targetId]);
    } else {
      setSelected((selected) => selected.filter((id) => id !== targetId));
    }
  };

  return isLoading ? (
    <>Loading...</>
  ) : isError ? (
    <Alert message={error} type="warning" style={{ marginTop: "10px" }} />
  ) : (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 380,
      }}
    >
      <Space size={"large"} wrap style={{ justifyContent: "center" }}>
        {products
          .slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
          .map((product: any, index: number) => (
            // <Col span={8}>
            <HomeProductCard
              key={product.id}
              id={product.id}
              name={product?.name}
              price={product?.price?.formattedValue}
              code={product?.code}
              imageUrl={product?.images?.[0]?.url}
              checked={selected.includes(product.id)}
              handleCheckBoxOnChage={handleSelectChange}
            />
          ))}
      </Space>

      <Pagination
        defaultCurrent={1}
        total={products.length}
        onChange={(page) => setPage(page)}
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 15]}
      />

      <List
        header={<Typography.Title level={5}>Selected :</Typography.Title>}
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={products.filter((product) => selected.includes(product.id))}
        renderItem={(product) => (
          <List.Item
            actions={[
              // <a key="list-loadmore-edit">Remove</a>,
              <Button
                type="text"
                danger
                onClick={() => {
                  handleSelectChange(product.id, false);
                }}
              >
                Remove
              </Button>,
            ]}
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.picture.large} />}
              title={
                <Link to={`./products/${product.id}`}>{product.name}</Link>
              }
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
}
export default Home;
