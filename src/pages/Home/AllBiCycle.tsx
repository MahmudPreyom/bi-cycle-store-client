import React from "react";
import { Card, Spin, Row, Col, Button } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/products/productsManagmentApi";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
}

const AllBicycles: React.FC = () => {
  const {
    data: products,
    isFetching,
    error,
  } = useGetAllProductsQuery(undefined);
  const navigate = useNavigate();

  if (isFetching) return <Spin size="large" />;
  if (error) return <p>Error fetching products</p>;
  if (!products || !Array.isArray(products.data))
    return <p>No products available</p>;

  return (
    <div className="bicycle-card">
      <h2>All Bicycles</h2>
      <Row gutter={[16, 16]} justify="center">
        {products.data.map(({ _id, name, brand, price }: Product) => (
          <Col key={_id} xs={24} sm={12} md={8} lg={8} xl={8}> {/* Updated to 8 columns per card */}
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

      {/* Back Button */}
      <Button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
        Back
      </Button>
    </div>
  );
};

export default AllBicycles;
