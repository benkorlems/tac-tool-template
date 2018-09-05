import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import { ArrowBack } from "@material-ui/icons";

import themes from "./themes";

export const configuredTheme = themes[0].theme;

export const configuredLayout = {
  currentLayout: "compact",
  notificationsOpen: false
};

const iconStyle = {
  fontSize: 18
};

export const menuItems = [
  {
    title: "Home",
    href: "/dashboard",
    icon: <HomeIcon style={iconStyle} />
  },
  {
    title: "Logout",
    href: "/login",
    icon: <ArrowBack style={iconStyle} />
  }
];
