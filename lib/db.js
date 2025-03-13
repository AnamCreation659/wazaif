// for local db connection for postgres 
// // lib/db.js
// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
// });

// export default pool;



// for live postgres at railway
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default pool;
