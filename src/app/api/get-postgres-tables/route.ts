// app/api/tables/route.ts
import { NextResponse, NextRequest } from "next/server";
import { formatConnectionString } from "@/lib/postgres";
import { Pool } from "pg";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const pool = new Pool({
      connectionString: formatConnectionString(body),
    });

    const result = await pool.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public' AND table_type = 'BASE TABLE';
    `);

    return NextResponse.json({
      data: { message: "Connection successful.", tables: result.rows },
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
