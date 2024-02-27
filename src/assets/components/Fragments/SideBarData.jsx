import React from "react";
import { FaHome, FaCartPlus } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { FcSupport } from "react-icons/fc";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "nav-text",
  },
  {
    title: "Report",
    path: "/report",
    icon: <TbReportAnalytics />,
    cName: "nav-text",
  },
  {
    title: "Product",
    path: "/product",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <FcSupport />,
    cName: "nav-text",
  },
];
