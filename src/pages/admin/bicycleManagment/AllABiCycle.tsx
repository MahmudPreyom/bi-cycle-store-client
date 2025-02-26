/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Card, Spin, Row, Col, Button, Modal, message } from "antd";
import { Link } from "react-router-dom";
import {
  useDeleteBicycleMutation,
  useGetAllBicycleQuery,
} from "../../../redux/features/admin/bicycleManagment.api";
import bicycle from "../../../assets/bicycle.png";

interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
}

const AllABicycles: React.FC = () => {
  const {
    data: products,
    isFetching,
    error,
  } = useGetAllBicycleQuery(undefined);
  const [deleteBicycle] = useDeleteBicycleMutation(undefined);

  if (isFetching) return <Spin size="large" />;
  if (error) return <p>Error fetching products</p>;
  if (!products || !Array.isArray(products.data))
    return <p>No products available</p>;

  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: "Are you sure?",
      content:
        "Do you really want to delete this bicycle? This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        const hide = message.loading("Deleting...", 0);

        try {
          const res = await deleteBicycle(id);
          hide();

          if ("error" in res) {
            message.error("Failed to delete bicycle");
          } else {
            message.success("Bicycle deleted successfully");
          }
        } catch (err) {
          hide();
          message.error("Something went wrong");
        }
      },
    });
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
                  // src="https://i.ibb.co.com/Pzxq5b46/n2-black-4r.png"
                  src={bicycle}
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
                <Link to={`/dashboard/update-bicycle/${_id}`}>
                  <Button className="nav-btn">Update</Button>
                </Link>

                <Button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                  }}
                  className="nav-btn"
                  onClick={() => handleDelete(_id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllABicycles;
