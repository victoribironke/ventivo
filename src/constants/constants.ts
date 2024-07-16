export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://app.ventivo.co";

export const IMAGES = {
  logo: { src: "/logo.png", w: 500, h: 500 },
};

export const PAGES = {
  home: "/",
};

export const TABLES = { projects: "projects", waitlist: "waitlist" };
