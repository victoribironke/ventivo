export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ventivo.co";

export const IMAGES = {
  logo: { src: "/logo.png", w: 500, h: 500 },
  logo_dark: { src: "/logo-dark.png", w: 500, h: 500 },
  logo_transparent: { src: "/logo-transparent.png", w: 500, h: 500 },
  projects_display: { src: "/projects-display.png", w: 1920, h: 880 },
  charts_display: { src: "/charts-display.png", w: 1920, h: 880 },
};

export const PAGES = {
  home: "/",

  login: "https://app.ventivo.co/auth/login",
  signup: "https://app.ventivo.co/auth/signup",
};

export const TABLES = {
  projects: "projects",
  charts: "charts",
  waitlist: "waitlist",
};
