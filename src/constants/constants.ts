import { Project } from "@/types/dashboard";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { ApprovalStatus } from "@/interfaces/general";
import {
  MessageCircleMore,
  MonitorUp,
  Package,
  ShoppingBag,
  Table2,
  User,
} from "lucide-react";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://app.ventivo.co";

export const IMAGES = {
  logo: { src: "/logo.png", w: 500, h: 500 },
  logo_dark: { src: "/logo-dark.png", w: 500, h: 500 },
  logo_transparent: { src: "/logo-transparent.png", w: 500, h: 500 },
  projects_display: { src: "/projects-display.png", w: 1920, h: 880 },
  charts_display: { src: "/charts-display.png", w: 1920, h: 880 },

  data_visualization: { src: "/blog/data-visualization.jpg", w: 3008, h: 1504 },
  coding: { src: "/blog/coding.jpg", w: 5184, h: 2592 },
  security_rules: { src: "/blog/security-rules.jpg", w: 3840, h: 1920 },
};

export const PAGES = {
  home: "/",

  login: "/auth/login",
  signup: "/auth/signup",
  confirm: "/auth/confirm",

  dashboard: "/dashboard",
  admin: "/dashboard/admin",
  project: {
    firebase: (id: string) => `/dashboard/firebase/${id}`,
    postgres: (id: string) => `/dashboard/postgres/${id}`,
  },
  settings: "/dashboard/settings",
};

export const TABLES = {
  projects: "projects",
  charts: "charts",
  customers: "customers",
  coupons: "coupons",
};

export const DEFAULT_SETTINGS = {
  bar: {
    color: "#ff9100",
    showCount: false,
    paginateBars: false,
    barsPerPage: 1,
  },
  line: {
    color: "#ff9100",
    showCount: false,
    paginateDots: false,
    dotsPerPage: 1,
  },
};

export const OPERATORS = [
  "<",
  "<=",
  "==",
  ">",
  ">=",
  "!=",
  "array-contains",
  "array-contains-any",
  "in",
  "not-in",
];

export const ICONS = (type: Project["type"]) => {
  if (type === "firebase") return { icon: SiFirebase, color: "#ff9100" };
  if (type === "postgres") return { icon: BiLogoPostgresql, color: "#3b82f6" };
  else return { icon: FaDatabase, color: "#3b82f6" };
};

export const LINKS = (type: Project["type"], slug: string) => {
  if (type === "firebase") return PAGES.project.firebase(slug);
  if (type === "postgres") return PAGES.project.postgres(slug);
  else return "";
};

export const SIDEBAR_ITEMS = (pathname: string) => [
  // {
  //   title: "Dashboard",
  //   icon: Table2,
  //   isActive: pathname === PAGES.dashboard.home,
  //   link: PAGES.dashboard.home,
  // },
  // {
  //   title: "Chat",
  //   icon: MessageCircleMore,
  //   isActive:
  //     pathname === PAGES.dashboard.chats ||
  //     pathname.includes(PAGES.dashboard.chats),
  //   link: PAGES.dashboard.chats,
  // },
  // // {
  // //   title: "Analytics",
  // //   icon: ChartNoAxesColumn,
  // //   isActive: pathname === PAGES.dashboard.analytics,
  // //   link: PAGES.dashboard.analytics,
  // // },
  // {
  //   title: "List product",
  //   icon: MonitorUp,
  //   isActive: pathname === PAGES.dashboard.list_product,
  //   link: PAGES.dashboard.list_product,
  // },
  // {
  //   title: "Products",
  //   icon: Package,
  //   isActive:
  //     pathname === PAGES.dashboard.products ||
  //     pathname.includes(PAGES.dashboard.products),
  //   link: PAGES.dashboard.products,
  // },
  // {
  //   title: "Orders",
  //   icon: ShoppingBag,
  //   isActive:
  //     pathname === PAGES.dashboard.orders ||
  //     pathname.includes(PAGES.dashboard.orders),
  //   link: PAGES.dashboard.orders,
  // },
  // {
  //   title: "Profile",
  //   icon: User,
  //   isActive: pathname === PAGES.dashboard.profile,
  //   link: PAGES.dashboard.profile,
  // },
];

// export const HEADER_LINKS = (pathname: string) => [
//   {
//     title: "Shop",
//     isActive: pathname === PAGES.main.shop.home,
//     link: PAGES.main.shop.home,
//   },
//   {
//     title: "Chats",
//     isActive:
//       pathname === PAGES.main.shop.chats ||
//       pathname.includes(PAGES.dashboard.chats),
//     link: PAGES.main.shop.chats,
//   },
//   {
//     title: "Wishlist",
//     isActive: pathname === PAGES.main.shop.wishlist,
//     link: PAGES.main.shop.wishlist,
//   },
//   {
//     title: "Orders",
//     isActive: pathname === PAGES.main.shop.orders,
//     link: PAGES.main.shop.orders,
//   },
// ];
