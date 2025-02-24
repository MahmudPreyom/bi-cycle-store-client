/* eslint-disable @typescript-eslint/no-unused-vars */
import { Table, Button, Space, Modal, message } from "antd";
import {
  useDeleteBicycleOrderMutation,
  useGetUserOrdersQuery,
} from "../../redux/features/orders/orderManagmentApi";
import { Link } from "react-router-dom";

const Orders = () => {
  const { data: order, isLoading } = useGetUserOrdersQuery(undefined);
  const [deleteOrder] = useDeleteBicycleOrderMutation();


  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: "Are you sure?",
      content:
        "Do you really want to delete this Order? This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        const hide = message.loading("Deleting...", 0);

        try {
          const res = await deleteOrder(id);
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

  const columns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Product Name",
      dataIndex: "product",
      key: "productName",
      render: (product: { name: string }) => product?.name || "N/A",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "totalPrice",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: { _id: string }) => (
        <Space>
          <Link to={`/dashboard/update-order/${record._id}`}>
            <Button type="primary">Update</Button>
          </Link>
          <Button type="primary">Pay</Button>
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={order?.data || []}
      loading={isLoading}
      rowKey="_id"
    />
  );
};

export default Orders;
