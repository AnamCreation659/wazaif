// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

// async function createTable() {
//   try {
//     await sql.query(`
//       CREATE TABLE IF NOT EXISTS blogs (
//         id SERIAL PRIMARY KEY,
//         title VARCHAR(255) NOT NULL,
//         content TEXT NOT NULL,
//         image TEXT
//       );
//     `);
//     console.log("Table 'blogs' created or already exists.");
//   } catch (error) {
//     console.error("Error creating table:", error);
//   }
// }

// export async function GET() {
//   try {
//     // Ensure the table is created
//     await createTable();

//     return NextResponse.json(
//       { message: "Table checked/created successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error in GET request:", error);
//     return NextResponse.json(
//       { error: `Failed to process request: ${error.message}` },
//       { status: 500 }
//     );
//   }
// }
