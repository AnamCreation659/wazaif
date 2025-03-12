import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Extract query params
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    console.log(id, "Received ID");

    // Check if ID is provided
    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    // Query to fetch specific blog by ID
    const blogResult = await sql`
      SELECT * FROM blogs WHERE id = ${id};
    `;

    console.log(blogResult, "Blog Result");

    // If no blog found with the provided ID
    if (blogResult.rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Return the blog data
    return NextResponse.json(
      { specificBlogResult: blogResult.rows }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
