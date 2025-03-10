import { Project } from "@/types/dashboard";
import { Database, Flame } from "lucide-react";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ventivo.co";

export const IMAGES = {
  logo: { src: "/logo.png", w: 500, h: 500 },
  og_image: { src: "/og-image.png", w: 1280, h: 720 },
};

export const PAGES = {
  home: "/",

  login: "/auth/login",
  signup: "/auth/signup",
  confirm: "/auth/confirm",

  dashboard: "/dashboard",
  admin: "/dashboard/admin",
  project: {
    firebase: (id: string) => `/dashboard/project/firebase/${id}`,
    postgres: (id: string) => `/dashboard/project/postgres/${id}`,
  },
  settings: "/dashboard/settings",

  terms: "/terms",
  privacy_policy: "/privacy-policy",
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
  if (type === "firebase") return { icon: Flame, color: "#ff9100" };
  //   if (type === "postgres") return { icon: BiLogoPostgresql, color: "#3b82f6" };
  else return { icon: Database, color: "#3b82f6" };
};

export const LINKS = (type: Project["type"], slug: string) => {
  if (type === "firebase") return PAGES.project.firebase(slug);
  if (type === "postgres") return PAGES.project.postgres(slug);
  else return "";
};
