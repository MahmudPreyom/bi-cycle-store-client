import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
  hidden?: boolean;
};

export type MenuItemType = {
  key: string;
  label: string | ReactNode;
  icon?: ReactNode;
  children?: MenuItemType[];
};
