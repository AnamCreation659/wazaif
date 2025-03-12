import pool from '../../../../lib/db';
 
export async function GET(req) {
  try {
    console.log("GET request received. Dropping and creating table...");

    // Drop table if it already exists
    await pool.query(`DROP TABLE IF EXISTS blogs;`);
    console.log("Existing table dropped.");

    // Create table with only title, subtitle, and content
    await pool.query(`
      CREATE TABLE blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        subtitle VARCHAR(255),
        content TEXT NOT NULL
      );
    `);
    console.log("New table created with title, subtitle, and content.");

    return new Response("Table dropped and created successfully", { status: 200 });

  } catch (error) {
    console.error("Error creating table:", error);
    return new Response(`Error creating table: ${error.message}`, { status: 500 });
  }
}
