import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types/sidebar.type";

export const sidebarItemsGenerator = (items: TUserPath[]) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/dashboard/${item.path}`}>{item.name}</NavLink>, // Fixed path
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/dashboard/${child.path}`}>{child.name}</NavLink> // Fixed path
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

