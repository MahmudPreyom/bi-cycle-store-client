/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useGetSingleBicycleQuery } from "../../redux/features/products/productsManagmentApi"; // Correct path for the hook
import { Button, Spin } from "antd";
import bicycle from "../../assets/bicycle.png";
import "./SingleBicycleDetails.css";
import { useAppSelector } from "../../redux/hooks";
import { useCreateOrderBiCycleMutation } from "../../redux/features/orders/orderManagmentApi";
import { toast } from "sonner";

const SingleBicycleDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleBicycleQuery(id);
  const [createOrderBiCycle] = useCreateOrderBiCycleMutation();
  const user = useAppSelector((state: any) => state.auth.user);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
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
    <div className="details-container">
      <div className="card">
        <h1 className="title">Bicycle Details</h1>
        <h1 className="title">{product?.data?.name}</h1>
        <img
          src={
            bicycle
            // "https://i.ibb.co.com/Pzxq5b46/n2-black-4r.png"
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
            onClick={() => handleAddToCart(product?.data?._id, 1)}
          >
            {product?.data?.quantity === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleBicycleDetails;
