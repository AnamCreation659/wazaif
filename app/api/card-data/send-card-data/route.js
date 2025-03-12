import { NextResponse } from 'next/server';
import pool from '../../../../lib/db'; // adjust the path as per your structure

export async function POST(req) {
  try {
    const { title, subtitle, content } = await req.json();
    console.log(title,'title')
    console.log(subtitle,'subtitle')
    console.log(content,'content')

    const result = await pool.query(
      `INSERT INTO blogs (title, subtitle, content) VALUES ($1, $2, $3) RETURNING *`,
      [title, subtitle, content]
    );

    return NextResponse.json({ message: 'Blog added successfully!', blog: result.rows[0] });
  } catch (error) {
    console.error('Error inserting blog:', error);
    return NextResponse.json({ error: 'Error inserting blog data' }, { status: 500 });
  }
}
