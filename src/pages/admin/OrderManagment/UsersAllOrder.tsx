/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Modal, Table, Button, message } from "antd";
import {
  useDeleteBicycleOrderByAdminMutation,
  useGetUserOrdersByAdminQuery,
  useUpdateBicycleOrderByAdminMutation,
} from "../../../redux/features/orders/orderManagmentApi";

const UsersAllOrder: React.FC = () => {
  const { data, error, isLoading } = useGetUserOrdersByAdminQuery({});
  const [updateOrderStatus] = useUpdateBicycleOrderByAdminMutation();
  const [deleteOrder] = useDeleteBicycleOrderByAdminMutation();

  const handleStatusChange = async (orderId: string) => {
    try {
      const response = await updateOrderStatus({
        id: orderId,
        data: { status: "Shipped" },
      }).unwrap();

      if (response.success) {
        message.success("Order marked as shipped!");
      }
    } catch (err) {
      message.error("Failed to update order status");
    }
  };

  // const handleDeleteOrder = async (orderId: string) => {
  //   try {
  //     await deleteOrder(orderId);
  //     message.success("Order deleted successfully!");
  //   } catch (err) {
  //     message.error("Failed to delete order");
  //   }
  // };
  const { confirm } = Modal;

  const handleDeleteOrder = (orderId: string) => {
    confirm({
      title: "Are you sure you want to delete this order?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          await deleteOrder(orderId);
          message.success("Order deleted successfully!");
        } catch (err) {
          message.error("Failed to delete order");
        }
      },
      onCancel() {
        // You can leave this empty or add some logic if needed
        console.log("Delete cancelled");
      },
    });
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string, record: any) => (
        <Button
          type="primary"
          danger={status === "Pending"}
          style={{
            backgroundColor: status === "Shipped" ? "#CCFFCC" : "red",
            borderColor: "transparent",
          }}
          onClick={() => handleStatusChange(record._id)}
          disabled={status === "Shipped"}
        >
          {status}
        </Button>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Button
          type="primary"
          danger
          onClick={() => handleDeleteOrder(record._id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error fetching orders</p>;

  return <Table columns={columns} dataSource={data?.data || []} rowKey="_id" />;
};

export default UsersAllOrder;
