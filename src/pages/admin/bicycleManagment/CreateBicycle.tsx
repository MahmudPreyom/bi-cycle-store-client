/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Row } from "antd";
import ShopForm from "../../../components/form/ShopForm";
import ShopInput from "../../../components/form/ShopInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import ShopSelect from "../../../components/form/ShopSelect";
import { useAddBicycleMutation } from "../../../redux/features/admin/bicycleManagment.api";
import { TResponse } from "../../../types/global";
import { toast } from "sonner";

const typeOptions = [
  { value: "Mountain", label: "Mountain Bike" },
  { value: "Road", label: "Road Bike" },
  { value: "Hybrid", label: "Hybrid Bike" },
  { value: "BMX", label: "BMX Bike" },
  { value: "Electric", label: "ELectric Bike" },
];

const CreateBicycle = () => {
  const [createBicycle] = useAddBicycleMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    try {
      const bicycleData = {
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
      };
      const res = (await createBicycle(bicycleData)) as TResponse<any>;
      // const res = await createBicycle(bicycleData).unwrap();
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Product Created Successfully", { id: toastId });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row justify="center" style={{ width: "100%" }}>
        <Col xs={22} sm={18} md={14} lg={10} xl={8} xxl={6}>
          <ShopForm onSubmit={onSubmit}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Create A Bicycle
            </h1>
            <ShopInput type="text" name="name" label="Name" />
            <ShopInput type="text" name="brand" label="Brand" />
            <ShopInput type="number" name="price" label="Price" />
            <ShopSelect label="Type" name="type" options={typeOptions} />
            <ShopInput type="text" name="description" label="Description" />
            <ShopInput type="number" name="quantity" label="Quantity" />
            <Button className="nav-btn" htmlType="submit" block>
              Create A Bicycle
            </Button>
          </ShopForm>
        </Col>
      </Row>
    </Flex>
  );
};

export default CreateBicycle;
