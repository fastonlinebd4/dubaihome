import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendLeadEmail } from '@/lib/mail';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        // 'address' ফিল্ডটি এখানে ডিকনস্ট্রাক্ট করা হয়েছে
        const { name, phone, email, service, address, message } = data;

        if (!name || !phone || !service) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Save to Database
        const lead = await prisma.lead.create({
            data: {
                name,
                phone,
                email,
                service,
                address, // ডাটাবেসে অ্যাড্রেস সেভ করা হচ্ছে
                message,
            },
        });

        // 2. Send Email Notification
        try {
            // ইমেইল ফাংশনেও অ্যাড্রেস পাঠানো হচ্ছে
            await sendLeadEmail({ name, phone, email, service, address, message });
        } catch (mailError) {
            console.error('Mail notification failed:', mailError);
        }

        return NextResponse.json({ success: true, lead }, { status: 201 });
    } catch (error) {
        console.error('Lead submission error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}