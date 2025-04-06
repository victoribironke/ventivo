import { PostgresProjectInfo } from "@/types/dashboard";

export const formatConnectionString = (data: PostgresProjectInfo) => {
  const { databaseName, host, password, port, user } = data;

  return `postgres://${user}:${password}@${host}:${port}/${databaseName}`;
};
