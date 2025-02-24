/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Row, Spin } from "antd";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  useGetUserOrdersQuery,
  useUpdateBicycleOrderMutation,
} from "../../redux/features/orders/orderManagmentApi";
import { TResponse } from "../../types/global";
import ShopForm from "../../components/form/ShopForm";
import ShopInput from "../../components/form/ShopInput";

const UpdateOrder = () => {
  const { id } = useParams<{ id: string }>();
  const { data: orders, isLoading, error } = useGetUserOrdersQuery(undefined);
  const [updateOrder] = useUpdateBicycleOrderMutation();

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const order = orders?.data?.find((order: any) => order._id === id);
    if (order) {
      setQuantity(order.quantity || 0);
    }
  }, [orders, id]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating...");

    try {
      const orderUpdateData = {
        id,
        data: {
          quantity: Number(data.quantity),
        },
      };

      const res = (await updateOrder(orderUpdateData)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Order Quantity Updated Successfully", { id: toastId });
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
        <h2>Error loading order data</h2>
      </Flex>
    );
  }

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row justify="center" style={{ width: "100%" }}>
        <Col xs={22} sm={18} md={14} lg={10} xl={8} xxl={6}>
          <ShopForm onSubmit={onSubmit} defaultValues={{ quantity }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Update Order Quantity
            </h1>
            <ShopInput type="number" name="quantity" label="Quantity" />

            <Button className="nav-btn" htmlType="submit" block>
              Update Quantity
            </Button>
          </ShopForm>
        </Col>
      </Row>
    </Flex>
  );
};

export default UpdateOrder;
