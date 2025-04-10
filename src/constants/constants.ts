import { Project } from "@/types/dashboard";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import {
  Database,
  Flame,
  LogOut,
  Mail,
  MessageSquareText,
  Settings,
  Table2,
} from "lucide-react";
import NewFirebaseProject from "@/components/dashboard/projects/new/firebase";
import NewPostgresProject from "@/components/dashboard/projects/new/postgres";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ventivo.co";

export const IMAGES = {
  logo: { src: "/logo-transparent.png", w: 500, h: 500 },
  logo_dark: { src: "/logo-dark.png", w: 500, h: 500 },
  logo_transparent: { src: "/logo-transparent.png", w: 500, h: 500 },
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

  terms: "/terms",
  privacy_policy: "/privacy-policy",
  blog: "/blog",
  tools: "/tools",

  twitter: "https://twitter.com/ventivo_",
  instagram: "https://instagram.com/ventivo_",
  tiktok: "https://tiktok.com/ventivo_",
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

// export const OPERATORS = [
//   "<",
//   "<=",
//   "==",
//   ">",
//   ">=",
//   "!=",
//   "array-contains",
//   "array-contains-any",
//   "in",
//   "not-in",
// ];

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
  {
    title: "Dashboard",
    icon: Table2,
    isActive: pathname === PAGES.dashboard,
    link: PAGES.dashboard,
    type: "link",
  },
  {
    title: "CREATE A NEW PROJECT",
    type: "sep",
    icon: Table2,
    isActive: false,
    link: "",
  },
  {
    title: "Firebase",
    type: "button",
    icon: Flame,
    isActive: false,
    link: "",
    element: NewFirebaseProject,
  },
  {
    title: "PostgreSQL",
    type: "button",
    icon: Database,
    isActive: false,
    link: "",
    element: NewPostgresProject,
  },
  {
    title: "HELP & SUPPORT",
    type: "sep",
    icon: Table2,
    isActive: false,
    link: "",
  },
  {
    title: "Feedback",
    icon: MessageSquareText,
    isActive: false,
    link: "https://ventivo.userjot.com/",
    type: "link",
  },
  {
    title: "Contact support",
    icon: Mail,
    isActive: false,
    link: "mailto:support@ventivo.co",
    type: "link",
  },

  {
    title: "ACCOUNT",
    type: "sep",
    icon: Table2,
    isActive: false,
    link: "",
  },
  {
    title: "Settings",
    icon: Settings,
    isActive: pathname.includes(PAGES.settings),
    link: PAGES.settings,
    type: "link",
  },
  {
    title: "Log out",
    icon: LogOut,
    isActive: false,
    link: "",
    type: "logout",
  },
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
