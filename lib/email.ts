import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendBookingNotification = async (bookingData: any) => {
  const mailOptions = {
    from: `"KGB Hotels" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Booking Enquiry - ${bookingData.guestName}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #4f46e5;">New Booking Details</h2>
        <p><strong>Guest Name:</strong> ${bookingData.guestName}</p>
        <p><strong>Phone:</strong> ${bookingData.guestPhone}</p>
        <p><strong>Hotel:</strong> ${bookingData.hotelId}</p>
        <p><strong>Rooms:</strong> ${bookingData.roomsRequested}</p>
        <p><strong>Check In:</strong> ${new Date(bookingData.checkInDate).toLocaleDateString()}</p>
        <p><strong>Check Out:</strong> ${new Date(bookingData.checkOutDate).toLocaleDateString()}</p>
        <hr />
        <p style="color: #666; font-size: 0.9em;">This is an automated notification from KGB Hotels CRM.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
