/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Card, Spin, Row, Col, Button } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/products/productsManagmentApi";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCreateOrderBiCycleMutation } from "../../redux/features/orders/orderManagmentApi";
import { toast } from "sonner";

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
}

const AllBicycles: React.FC = () => {
  const {
    data: products,
    isFetching,
    error,
  } = useGetAllProductsQuery(undefined);
  const navigate = useNavigate();
  const [createOrderBiCycle] = useCreateOrderBiCycleMutation();
  const user = useAppSelector((state: any) => state?.auth?.user);

  // Loading state or error state check
  if (isFetching) return <Spin size="large" />;
  if (error || !products) return <p>Error fetching products</p>; // Handle error or empty state
  if (!Array.isArray(products.data) || products.data.length === 0) {
    return <p>No products available</p>; // Handle empty products array
  }

  const handleAddToCart = async (productId: string, quantity: number) => {
    if (!user) {
      return toast.error("Please log in to place an order");
    }

    const toastId = toast.loading("Adding to cart...");

    try {
      const orderData = { product: productId, quantity };
      const response = await createOrderBiCycle(orderData);

      if ("error" in response) {
        throw new Error("Failed to add to cart");
      }

      toast.success("Added to cart successfully!", { id: toastId });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="bicycle-card">
      <h1 style={{ fontSize: "40px", marginBottom: "40px", marginTop: "50px" }}>
        All Bicycles
      </h1>
      <Row gutter={[16, 16]} justify="center">
        {products.data.map(({ _id, name, brand, price, quantity }: Product) => (
          <Col key={_id} xs={24} sm={12} md={8} lg={8} xl={8}>
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
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
                <Link to={`/details-bicycles/${_id}`}>
                  <Button className="nav-btn">Details</Button>
                </Link>
                <Button
                  disabled={quantity === 0}
                  style={{
                    backgroundColor: quantity === 0 ? "#FFF5EE" : "",
                    borderColor: quantity === 0 ? "orange" : "",
                  }}
                  className="nav-btn"
                  onClick={() => handleAddToCart(_id, 1)}
                >
                  {quantity === 0 ? "Out of Stock" : "Add to Cart"}
                </Button>
              </div>
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
