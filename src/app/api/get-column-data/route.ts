import { NextResponse, NextRequest } from "next/server";
import { formatConnectionString } from "@/lib/postgres";
import { Pool } from "pg";

export const POST = async (req: NextRequest) => {
  try {
    const { table, column } = Object.fromEntries(req.nextUrl.searchParams);
    const body = await req.json();

    if (!table || !column) {
      return NextResponse.json(
        { error: "Table and column are required" },
        { status: 400 }
      );
    }

    const pool = new Pool({
      connectionString: formatConnectionString(body),
    });

    const result = await pool.query(`SELECT ${column} FROM ${table};`);

    return NextResponse.json({
      data: { message: "Connection successful.", res: result.rows },
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
