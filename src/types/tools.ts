export type GetDataOptions = {
  type: "get-single-document" | "get-multiple-documents-(collection)";
  orderBy: string;
  limit: number;
  realtime: boolean;
  filters: { field: string; operator: string }[];
};

export type AddDataOptions = {
  type:
    | "set-document-(with-known-document-id)"
    | "add-document-(with-unknown-document-id)";
};
