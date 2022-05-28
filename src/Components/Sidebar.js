import {
  ArchiveIcon, ClipboardCheckIcon, LogoutIcon,
  MailIcon, UserGroupIcon
} from "@heroicons/react/outline";
import { ViewGridIcon } from "@heroicons/react/solid";
import React from "react";
import CustomSideLink from "./CustomSideLink";

const Sidebar = () => {
  return (
    <aside className="bg-primary h-screen fixed z-20 w-24 text-base-100 flex items-center justify-center">
      <ul className="flex flex-col justify-between h-full py-40 space-y-6">
        <li className="h-full flex flex-col justify-center bg-black">
          <CustomSideLink className="" to="/">
            <div
              className="tooltip tooltip-right rounded hover:bg-purple-600 duration-500"
              data-tip="Dashboard"
            >
              <ViewGridIcon className="w-7 text-base-100" />
            </div>
          </CustomSideLink>
          <CustomSideLink to="/dashboard/manageProducts">
            <div
              className="tooltip tooltip-right rounded hover:bg-purple-600 duration-500"
              data-tip="Manage Products"
            >
              <ArchiveIcon className="w-7 text-base-100 bg-green-500" />
            </div>
          </CustomSideLink>
          <CustomSideLink className="" to="/dashboard/manageOrders">
          <div
              className="tooltip tooltip-right"
              data-tip="Manage Orders"
            >
              <ClipboardCheckIcon className="w-8 text-base-100" />
            </div>
          </CustomSideLink>
        </li>
        <li className="h-full flex flex-col justify-center ">
          <CustomSideLink to="/">
            <div
              className="tooltip tooltip-right rounded hover:bg-purple-600 duration-500"
              data-tip="Mail"
            >
              <MailIcon className="w-7 text-base-100" />
            </div>
          </CustomSideLink>
          <CustomSideLink to="/dashboard/manageUsers">
            <div
              className="tooltip tooltip-right p-2 rounded hover:bg-purple-600 duration-500"
              data-tip="Manage Users"
            >
               <UserGroupIcon className="w-7 text-base-100" />
            </div>
          </CustomSideLink>
        </li>
        <li className="h-full flex flex-col justify-center ">
          <CustomSideLink to="/">
            <div
              className="tooltip tooltip-right p-2 rounded-md duration-500"
              data-tip="Logout"
            >
              <LogoutIcon className="w-7 text-base-100" />
            </div>
          </CustomSideLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
