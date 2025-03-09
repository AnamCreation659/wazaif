import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, content, image = null } = await req.json(); // Image ko default null set kar diya

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO blogs (title, content, image)
      VALUES (${title}, ${content}, ${image});
    `;

    return NextResponse.json(
      { message: "Blog added successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting blog:", error);
    return NextResponse.json(
      { error: "Failed to add blog" },
      { status: 500 }
    );
  }
}
