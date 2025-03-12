import { NextResponse } from 'next/server';
import pool from '../../../../lib/db'; // Adjust path according to your project structure

export async function GET(req) {
  try {
    // Fetch only title, subtitle, and content
    const result = await pool.query(`
      SELECT title, subtitle, content FROM blogs
    `);

    // Return the fetched blogs
    return NextResponse.json({ blogs: result.rows });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Error fetching blogs data' }, { status: 500 });
  }
}
