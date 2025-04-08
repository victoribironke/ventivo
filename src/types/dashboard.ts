import { Firestore } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";

type Customization = {
  bar: {
    color: string;
    showCount: boolean;
    paginateBars: boolean;
    barsPerPage: number;
  };
  line: {
    color: string;
    showCount: boolean;
    paginateDots: boolean;
    dotsPerPage: number;
  };
};

export type Project = {
  id: number;
  created_at: string;
  owner_id: string;
  charts: number[];
  slug: string;
  customization?: Customization;
  project_info: FirebaseProjectInfo | PostgresProjectInfo;
  type: "firebase" | "postgres";
};

export type FirebaseChartInfo = {
  pathToCollection: string;
  type: "bar" | "line" | "pie";
  field: string;
  name: string;
  filters?: any[];
};

export type PostgresChartInfo = {
  table: string;
  type: "bar" | "line" | "pie";
  column: string;
  name: string;
  filters?: any[];
};

export type Chart = {
  id: number;
  created_at: string;
  project_id: number;
  chart_info: FirebaseChartInfo | PostgresChartInfo;
};

export type ChartData = { field: string; value: number; fill: string };

export type FirebaseProjectInfo = {
  appId: string;
  apiKey: string;
  projectId: string;
  authDomain: string;
  projectName: string;
  storageBucket: string;
  messagingSenderId: string;
  email: string;
  password: string;
};

export type PostgresProjectInfo = {
  host: string;
  port: string;
  user: string;
  password: string;
  projectName: string;
  databaseName: string;
};

export type ChartProps = {
  data: ChartData[];
  total: number;
  customization: Customization | undefined;
};

export type FirebaseChartCompProps = {
  chart: Chart;
  db: Firestore;
  p: Project;
  sUC: Dispatch<SetStateAction<string>>;
};

export type PostgresChartCompProps = {
  chart: Chart;
  tables: string[];
  p: Project;
  sUC: Dispatch<SetStateAction<string>>;
};

export type DeleteChartProps = {
  chart: Chart;
  p: Project;
  sUC: Dispatch<SetStateAction<string>>;
};

export type DeleteProjectProps = { p: Project };

export type EditFirebaseChartProps = {
  db: Firestore;
  chart: Chart;
  sUC: Dispatch<SetStateAction<string>>;
};

export type EditPostgresChartProps = {
  tables: string[];
  chart: Chart;
  sUC: Dispatch<SetStateAction<string>>;
  project_info: PostgresProjectInfo;
};

export type EditProjectProps = { project: Project | null };

export type CustomizeChartsProps = {
  project: Project | null;
  sUC: Dispatch<SetStateAction<string>>;
};

export type NewFirebaseChartProps = {
  db: Firestore;
  p: Project;
  s: string;
  sUC: Dispatch<SetStateAction<string>>;
};

export type NewPostgresChartProps = {
  p: Project;
  s: string;
  tables: string[];
  sUC: Dispatch<SetStateAction<string>>;
};

// export type Coupon = {
//   code: string;
//   created_at: string;
//   id: number;
//   used: boolean;
// };

export type Customer = {
  email: string;
  name: string;
  customer_id: string;
  plan_id: string;
  has_access: boolean;
  id: number;
  created_at: string;
};
