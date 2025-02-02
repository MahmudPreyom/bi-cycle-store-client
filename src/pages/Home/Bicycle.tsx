import React from "react";
import { Card, Spin, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/products/productsManagmentApi";

const { Meta } = Card;

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
}

const Bicycle: React.FC = () => {
  const navigate = useNavigate();
  const {
    data: products,
    isFetching,
    error,
  } = useGetAllProductsQuery(undefined);

  if (isFetching) return <Spin size="large" />;
  if (error) return <p>Error fetching products</p>;
  if (!products || !Array.isArray(products.data))
    return <p>No products available</p>;

  const displayedProducts = products.data.slice(0, 6);

  return (
    <div className="bicycle-card">
      <Row gutter={[16, 16]} justify="center">
        {displayedProducts.map(({ _id, name, brand, price }: Product) => (
          <Col key={_id} xs={24} sm={12} md={12} lg={8}>
            <Card
              hoverable
              cover={
                <img
                  alt={name}
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  style={{ objectFit: "cover" }}
                />
              }
            >
              <Meta title={name} description={`${brand} - $${price}`} />
            </Card>
          </Col>
        ))}
      </Row>

      <Button
        type="primary"
        onClick={() => navigate("/all-bicycles")}
        style={{ marginTop: "20px" }}
      >
        View All Bicycles
      </Button>
    </div>
  );
};

export default Bicycle;
