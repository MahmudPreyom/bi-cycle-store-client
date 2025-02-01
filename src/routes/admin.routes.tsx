import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateBicycle from "../pages/admin/bicycleManagment/CreateBicycle";

export const adminPath = [
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
    ],
  },
];
