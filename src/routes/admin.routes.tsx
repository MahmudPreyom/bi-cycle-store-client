import AdminDashboard from "../pages/admin/AdminDashboard";
import AllABiCycle from "../pages/admin/bicycleManagment/AllABiCycle";
import CreateBicycle from "../pages/admin/bicycleManagment/CreateBicycle";
import UpdateBicycle from "../pages/admin/bicycleManagment/UpdateBicycle";

export const adminPath = [
  {
    name: "Dashboard",
    path: "",
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
        path: "update-bicycle/:id",
        element: <UpdateBicycle />,
        hidden: true,
      },
    ],
  },
];
