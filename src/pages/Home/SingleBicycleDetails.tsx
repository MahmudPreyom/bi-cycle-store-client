import { useParams } from "react-router-dom";
import { Card } from "antd";
import { useGetSingleBicycleQuery } from "../../redux/features/products/productsManagmentApi"; // Correct path for the hook

const { Meta } = Card;

const SingleBicycleDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBicycleQuery(id);

  const { name, brand, price, description, imageUrl } = data;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img alt={name} src={imageUrl || "https://via.placeholder.com/300"} />
        }
      >
        <Meta title={name} description={`Brand: ${brand} | Price: $${price}`} />
        <p>{description}</p>
      </Card>
    </div>
  );
};

export default SingleBicycleDetails;
