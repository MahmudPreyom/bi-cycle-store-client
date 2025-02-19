// import CreateBicycle from "../pages/admin/bicycleManagment/CreateBicycle";
import ChangePasswordForm from "../pages/user/ChangePasswordForm";
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
];
