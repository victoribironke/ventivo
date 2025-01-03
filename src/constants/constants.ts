export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ventivo.co";

export const IMAGES = {
  logo: { src: "/logo.png", w: 500, h: 500 },
};

export const PAGES = {
  home: "/",

  login: "https://firebase.ventivo.co/auth/login",
  signup: "https://firebase.ventivo.co/auth/signup",

  terms: "/terms",
  privacy_policy: "/privacy-policy",
  twitter: "https://twitter.com/ventivo_",

  query_generator: "/tools/query-generator",

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
