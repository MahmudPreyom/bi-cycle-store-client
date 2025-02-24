// import CreateBicycle from "../pages/admin/bicycleManagment/CreateBicycle";
import ChangePasswordForm from "../pages/user/ChangePasswordForm";
import Order from "../pages/user/Order";
import UpdateOrder from "../pages/user/UpdateOrder";
import UserDashboard from "../pages/user/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "",
    element: <UserDashboard />,
  },
  {
    name: "User Dashboard",
    children: [
      {
        name: "Profile Setting",
        path: "change-password",
        element: <ChangePasswordForm />,
      },
    ],
  },
  {
    name: "Order",
    path: "order",
    element: <Order />,
  },
  {
    name: "",
    path: "update-order/:id",
    element: <UpdateOrder />,
    hidden: true
  },
];
