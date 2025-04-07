import { PostgresProjectInfo } from "@/types/dashboard";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export const testConnection = async (data: PostgresProjectInfo) => {
  const res = await fetch("/api/get-postgres-tables", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const json = await res.json();

    return { data: json.data.message, error: json.error };
  }

  return { data: null, error: "Error connecting to PostgreSQL database." };
};

export const getTables = async (data: PostgresProjectInfo) => {
  try {
    const res = await fetch("/api/get-postgres-tables", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();

    return {
      data: json.data.tables.map((t: any) => t.table_name),
      error: null,
    };
  } catch (e) {
    console.error(e);
    return {
      data: null,
      error:
        "Error fetching tables. Please check your internet connection or your project settings.",
    };
  }
};

export const getColumns = async (
  data: PostgresProjectInfo,
  table: string,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setColumns: Dispatch<SetStateAction<string[]>>
) => {
  try {
    setLoading(true);

    const res = await fetch("/api/get-columns?table=" + table, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    const columns = json.data.columns.map((c: any) => c.column_name);

    setColumns(columns);
  } catch (e) {
    console.error(e);
    toast.error("Error fetching columns.");
  } finally {
    setLoading(false);
  }
};
