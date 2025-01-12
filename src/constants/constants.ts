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

  data_visualization: { src: "/blog/data-visualization.jpg", w: 3008, h: 1504 },
  coding: { src: "/blog/coding.jpg", w: 5184, h: 2592 },
  security_rules: { src: "/blog/security-rules.jpg", w: 3840, h: 1920 },
};

export const PAGES = {
  home: "/",

  login: "https://app.ventivo.co/auth/login",
  signup: "https://app.ventivo.co/auth/signup",

  terms: "/terms",
  privacy_policy: "/privacy-policy",

  twitter: "https://twitter.com/ventivo_",
  instagram: "https://instagram.com/ventivo_",
  tiktok: "https://tiktok.com/ventivo_",

  firestore_query_generator: "/tools/firestore-query-generator",

  blog: {
    importance_of_data_visualization:
      BASE_URL + "/blog/importance-of-data-visualization",
    firebase_the_best_option:
      BASE_URL + "/blog/why-firebase-is-the-go-to-for-developers",
    security_rules:
      BASE_URL +
      "/blog/optimizing-firebase-security-rules-for-your-application",
  },
};

export const TABLES = {
  projects: "projects",
  charts: "charts",
  waitlist: "waitlist",
};

export const PAYMENT_LINKS = {
  nigeria: "https://paystack.com/pay/5rxhm8bjn-",
  other: "https://paystack.com/pay/536yd2cf23",
};
