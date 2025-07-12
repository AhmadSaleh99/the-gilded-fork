// lib/emailService.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendBookingConfirmationEmail = async (booking: {
  name: string;
  email: string;
  guests: number;
  date: Date;
}): Promise<string> => {
  const formattedDate = booking.date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Hello ${booking.name},</h2>
      <p>Thank you for your reservation at <strong>The Gilded Fork</strong>.</p>
      <ul>
        <li><strong>Date:</strong> ${formattedDate}</li>
        <li><strong>Guests:</strong> ${booking.guests}</li>
      </ul>
      <p>We look forward to serving you!</p>
      <p>— The Gilded Fork Team</p>
    </div>
  `;

  // ✅ Send the email
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: booking.email,
    subject: "🍽 Your Reservation Confirmation – The Gilded Fork",
    html,
  });

  return html; // You can save this to the DB too
};
