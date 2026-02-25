import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  // 'localhost' এর বদলে আপনার cPanel IP দিন
  host: '37.27.232.161', 
  user: 'mygovbd_dubai_home', // আপনার সঠিক ইউজার নাম
  password: 'mygovbd_dubai_home', // আপনার সঠিক পাসওয়ার্ড
  database: 'mygovbd_dubai_home', // আপনার সঠিক ডাটাবেজ নাম
  port: 3306,
  connectTimeout: 10000, // কানেকশন পেতে দেরি হলে ১০ সেকেন্ড ওয়েট করবে
};

export async function GET() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM reviews ORDER BY created_at DESC');
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('Database Error:', error.message); // এরর লগ দেখার জন্য
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}

export async function POST(request: Request) {
  let connection;
  try {
    const { name, rating, comment } = await request.json();
    
    // ভ্যালিডেশন চেক
    if (!name || !rating) {
        return NextResponse.json({ error: 'Name and Rating are required' }, { status: 400 });
    }

    connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      'INSERT INTO reviews (name, rating, comment) VALUES (?, ?, ?)',
      [name, Number(rating), comment] // রেটিং নাম্বার হিসেবে পাঠানো ভালো
    );
    return NextResponse.json({ message: 'Success' });
  } catch (error: any) {
    console.error('Insert Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}
