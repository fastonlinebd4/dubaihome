import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get('password') || '';

  // ✅ DEBUG (Vercel Logs এ দেখা যাবে)
  console.log('ENV ADMIN_PASSWORD exists?', !!process.env.ADMIN_PASSWORD);
  console.log('ENV ADMIN_PASSWORD value:', process.env.ADMIN_PASSWORD);
  console.log('USER PASSWORD value:', password);

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(leads);
  } catch (error) {
    console.error('Failed to fetch leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const password = searchParams.get('password') || '';

  // ✅ DEBUG (Vercel Logs এ দেখা যাবে)
  console.log('ENV ADMIN_PASSWORD exists?', !!process.env.ADMIN_PASSWORD);
  console.log('ENV ADMIN_PASSWORD value:', process.env.ADMIN_PASSWORD);
  console.log('USER PASSWORD value:', password);
  console.log('DELETE ID:', id);

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

  try {
    await prisma.lead.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete lead:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}