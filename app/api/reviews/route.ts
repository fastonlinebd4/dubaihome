import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// আপনার দেওয়া ডাটাবেজ কনফিগ
const dbConfig = {
  host: 'localhost',
  user: 'onlinebd_dubai_home',
  password: 'onlinebd_dubai_home',
  database: 'onlinebd_dubai_home',
};

// ডাটা নিয়ে আসা (GET)
export async function GET() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM reviews ORDER BY created_at DESC');
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}

// ডাটা সেভ করা (POST)
export async function POST(request: Request) {
  let connection;
  try {
    const { name, rating, comment } = await request.json();
    connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      'INSERT INTO reviews (name, rating, comment) VALUES (?, ?, ?)',
      [name, rating, comment]
    );
    return NextResponse.json({ message: 'Success' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}