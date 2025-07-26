import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'azizthiampro@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // App password, not regular password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'azizthiampro@gmail.com',
      to: 'azizthiampro@gmail.com',
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4F46E5; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e1e5e9; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px; font-size: 14px; color: #666;">
            <p style="margin: 0;"><strong>Reply to:</strong> ${data.email}</p>
            <p style="margin: 5px 0 0 0;">This message was sent from your portfolio website contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
Subject: ${data.subject}

Message:
${data.message}

Reply to: ${data.email}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
}