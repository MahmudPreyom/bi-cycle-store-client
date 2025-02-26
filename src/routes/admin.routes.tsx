import AdminDashboard from "../pages/admin/AdminDashboard";
import AllABiCycle from "../pages/admin/bicycleManagment/AllABiCycle";
import CreateBicycle from "../pages/admin/bicycleManagment/CreateBicycle";
import UpdateBicycle from "../pages/admin/bicycleManagment/UpdateBicycle";
import UsersAllOrder from "../pages/admin/OrderManagment/UsersAllOrder";
import { TUserPath } from "../types/sidebar.type";

export const adminPath: TUserPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Bicycle Management",
    children: [
      {
        name: "Create A Bicycle",
        path: "create-bicycle",
        element: <CreateBicycle />,
      },
      {
        name: "All Bicycle",
        path: "all-bicycle",
        element: <AllABiCycle />,
      },
      {
        name: "",
        path: "update-bicycle/:id",
        element: <UpdateBicycle />,
        hidden: true,
      },
    ],
  },
  {
    name: "User Order",
    path: "user-order",
    element: <UsersAllOrder />,
  },
];
