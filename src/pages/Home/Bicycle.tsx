import React from "react";
import { Card, Spin, Row, Col, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/products/productsManagmentApi";

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
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
      <h1
        style={{ fontSize: "40px", marginBottom: "40px", marginTop: "100px" }}
      >
        Some Of Bicycle
      </h1>
      <Row gutter={[16, 16]} justify="center">
        {displayedProducts.map(
          ({ _id, name, brand, price, quantity }: Product) => (
            <Col key={_id} xs={24} sm={12} md={12} lg={8}>
              <Card
                hoverable
                cover={
                  <img
                    alt={name}
                    src="https://i.ibb.co.com/Pzxq5b46/n2-black-4r.png"
                    style={{ objectFit: "cover" }}
                  />
                }
              >
                <h3>Name: {name}</h3>
                <p>Brand: {brand}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <p>Price: {price}</p>
                  <p style={{ color: quantity === 0 ? "red" : "inherit" }}>
                    Stock: {quantity}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                  }}
                >
                  <Link to="/details-bicycles">
                    <Button className="nav-btn">Details</Button>
                  </Link>
                  <Link to="/">
                    <Button
                      disabled={quantity === 0}
                      style={{
                        backgroundColor: quantity === 0 ? "#FFF5EE" : "",
                        borderColor: quantity === 0 ? "orange" : "",
                      }}
                      className="nav-btn"
                    >
                      {quantity === 0 ? "Out of Stock" : "Add to Cart"}
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          )
        )}
      </Row>

      <Button
        type="primary"
        onClick={() => navigate("/all-bicycles")}
        style={{ marginTop: "30px" }}
      >
        View All Bicycles
      </Button>
    </div>
  );
};

export default Bicycle;
