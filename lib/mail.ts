import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'mail.dubaihomecleaningservices.com',
    port: 465,
    secure: true,
    auth: {
        user: 'contact@dubaihomecleaningservices.com',
        pass: 'PFx95]J*OZUtCDbw', // Provided by user
    },
});

export const sendLeadEmail = async (leadData: any) => {
    const { name, phone, service, email, message } = leadData;

    const mailOptions = {
        from: '"Dubai Home Cleaning Leads" <contact@dubaihomecleaningservices.com>',
        to: 'contact@dubaihomecleaningservices.com',
        subject: `New Lead: ${service} - ${name}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="color: #3CA200; border-bottom: 2px solid #3CA200; padding-bottom: 10px;">New Service Inquiry</h2>
                <div style="margin-top: 20px;">
                    <p><strong>Customer Name:</strong> ${name}</p>
                    <p><strong>Phone Number:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email || 'Not provided'}</p>
                    <p><strong>Service Requested:</strong> ${service}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
                        ${message || 'No additional message provided.'}
                    </div>
                </div>
                <div style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
                    &copy; 2026 Dubai Home Cleaning Services
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
