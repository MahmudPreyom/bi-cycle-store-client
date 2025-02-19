import { Link, useParams } from "react-router-dom";
import { useGetSingleBicycleQuery } from "../../redux/features/products/productsManagmentApi"; // Correct path for the hook
import { Button, Spin } from "antd";
import "./SingleBicycleDetails.css";

const SingleBicycleDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleBicycleQuery(id);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="card">
        <h1 className="title">Bicycle Details</h1>
        <h1 className="title">{product?.data?.name}</h1>
        <img
          src={
            product?.data?.image ||
            "https://i.ibb.co.com/Pzxq5b46/n2-black-4r.png"
          }
          alt={product?.data?.name}
          className="bicycle-image"
        />
        {/* <p className="name">Name: {product?.data?.name}</p> */}
        <p className="brand">
          <span style={{ fontWeight: "bold" }}>Brand:</span>{" "}
          {product?.data?.brand}
        </p>
        <p className="type">
          <span style={{ fontWeight: "bold" }}>Type:</span>
          {product?.data?.type}
        </p>
        <p className="price">
          <span style={{ fontWeight: "bold" }}>Price:</span> $
          {product?.data?.price}
        </p>
        <p className="description">{product?.data?.description}</p>
        <p className="stock">
          <span style={{ fontWeight: "bold" }}>Stock:</span>{" "}
          {product?.data?.quantity}
        </p>
        <div className="button-group">
          <Link to="/">
            <Button className="home-button nav-btn">Home</Button>
          </Link>
          <Button
            disabled={product?.data?.quantity === 0}
            style={{
              backgroundColor: product?.data?.quantity === 0 ? "#FFF5EE" : "",
              borderColor: product?.data?.quantity === 0 ? "orange" : "",
            }}
            className="nav-btn"
          >
            {product?.data?.quantity === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleBicycleDetails;
