import {
  CalendarIcon, LogoutIcon,
  MailIcon,
  PresentationChartLineIcon,
  UserGroupIcon
} from "@heroicons/react/outline";
import { ViewGridIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-primary h-screen w-24 text-base-100 flex items-center justify-center">
      <ul className="flex flex-col justify-between h-full py-40 space-y-8">
        <li className="h-full flex flex-col justify-center ">
          <Link className="" to="/">
            <div
              className="tooltip tooltip-right p-2 rounded hover:bg-purple-600 duration-500"
              data-tip="Dashboard"
            >
              <ViewGridIcon className="w-7 text-base-100" />
            </div>
          </Link>
          <Link to="/">
            <div
              className="tooltip tooltip-right p-2 rounded hover:bg-purple-600 duration-500"
              data-tip="Statistics"
            >
              <CalendarIcon className="w-7 text-base-100" />
             
            </div>
          </Link>
          <Link to="/">
            <div
              className="tooltip tooltip-right p-2 rounded hover:bg-purple-600 duration-500"
              data-tip="Graph"
            >
              <PresentationChartLineIcon className="w-7 text-base-100" />
            </div>
          </Link>
        </li>
        <li className="h-full flex flex-col justify-center ">
          <Link to="/">
            <div
              className="tooltip tooltip-right p-2 rounded hover:bg-purple-600 duration-500"
              data-tip="Mail"
            >
              <MailIcon className="w-7 text-base-100" />
            </div>
          </Link>
          <Link to="/">
            <div
              className="tooltip tooltip-right p-2 rounded hover:bg-purple-600 duration-500"
              data-tip="Manage Users"
            >
               <UserGroupIcon className="w-7 text-base-100" />
            </div>
          </Link>
        </li>
        <li className="h-full flex flex-col justify-center ">
          <Link to="/">
            <div
              className="tooltip tooltip-right p-2 rounded hover:bg-purple-600 duration-500"
              data-tip="Logout"
            >
              <LogoutIcon className="w-7 text-base-100" />
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
