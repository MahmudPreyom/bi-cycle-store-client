/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Row, Spin } from "antd";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUpdateBicycleMutation } from "../../../redux/features/admin/bicycleManagment.api";
import ShopForm from "../../../components/form/ShopForm";
import ShopInput from "../../../components/form/ShopInput";
import ShopSelect from "../../../components/form/ShopSelect";
import { TResponse } from "../../../types/global";
import { useGetSingleBicycleQuery } from "../../../redux/features/products/productsManagmentApi";

const typeOptions = [
  { value: "Mountain", label: "Mountain Bike" },
  { value: "Road", label: "Road Bike" },
  { value: "Hybrid", label: "Hybrid Bike" },
  { value: "BMX", label: "BMX Bike" },
  { value: "Electric", label: "Electric Bike" },
];

const UpdateBicycle = () => {
  const { id } = useParams<{ id: string }>();
  const { data: bicycle, isLoading, error } = useGetSingleBicycleQuery(id);
  const [updateBicycle] = useUpdateBicycleMutation();

  // Manage form state using useState
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: 0,
    quantity: 0,
    description: "",
    type: "",
  });

  useEffect(() => {
    if (bicycle) {
      // Set form data with the fetched bicycle data
      setFormData({
        name: bicycle.name || "",
        brand: bicycle.brand || "",
        price: bicycle.price || 0,
        quantity: bicycle.quantity || 0,
        description: bicycle.description || "",
        type: bicycle.type || "",
      });
    }
  }, [bicycle]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating...");

    try {
      const bicycleUpdateData = {
        id,
        data: {
          ...data,
          price: Number(data.price),
          quantity: Number(data.quantity),
        },
      };

      const res = (await updateBicycle(bicycleUpdateData)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Bicycle Updated Successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
        <Spin size="large" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
        <h2>Error loading bicycle data</h2>
      </Flex>
    );
  }

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row justify="center" style={{ width: "100%" }}>
        <Col xs={22} sm={18} md={14} lg={10} xl={8} xxl={6}>
          <ShopForm onSubmit={onSubmit} defaultValues={formData}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Update Bicycle
            </h1>
            <ShopInput type="text" name="name" label="Name" />
            <ShopInput type="text" name="brand" label="Brand" />
            <ShopInput type="number" name="price" label="Price" />
            <ShopSelect label="Type" name="type" options={typeOptions} />
            <ShopInput type="text" name="description" label="Description" />
            <ShopInput type="number" name="quantity" label="Quantity" />

            <Button className="nav-btn" htmlType="submit" block>
              Update Bicycle
            </Button>
          </ShopForm>
        </Col>
      </Row>
    </Flex>
  );
};

export default UpdateBicycle;
