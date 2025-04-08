// app/api/columns/route.ts
import { NextResponse, NextRequest } from "next/server";
import { formatConnectionString } from "@/lib/postgres";
import { Pool } from "pg";

export const POST = async (req: NextRequest) => {
  try {
    const { table } = Object.fromEntries(req.nextUrl.searchParams);
    const body = await req.json();

    if (!table) {
      return NextResponse.json({ error: "Table is required" }, { status: 400 });
    }

    const pool = new Pool({
      connectionString: formatConnectionString(body),
    });

    const result = await pool.query(
      `
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = $1;
    `,
      [table]
    );

    return NextResponse.json({
      data: { message: "Connection successful.", columns: result.rows },
      error: null,
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      {
        data: null,
        error: "Error connecting to PostgreSQL database: " + e,
      },
      { status: 500 }
    );
  }
};
