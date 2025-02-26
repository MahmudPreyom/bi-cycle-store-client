import React from "react";
import { Table } from "antd";
import { useGetUserOrdersByAdminQuery } from "../../../redux/features/orders/orderManagmentApi";

const UsersAllOrder: React.FC = () => {
  const { data, error, isLoading } = useGetUserOrdersByAdminQuery({});
  //   console.log(data?.data[0]?.email);
  console.log(data);
  //   data.map(item => item.email);

  const columns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
      //   render: ()
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email: string) => email,
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
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
  ];

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error fetching orders</p>;

  return <Table columns={columns} dataSource={data?.data || []} rowKey="id" />;
};

export default UsersAllOrder;
