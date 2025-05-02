const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const {
    name, company, email, phone, city,
    state, country, message
  } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net', // change this to your actual SMTP host, e.g., mail.krishchemusa.com
    port: 465, // or 587, depending on your host
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER, // e.g., info@krishchemusa.com
      pass: process.env.EMAIL_PASS  // your email password or app password
    }
  });
  console.log('Email user:', process.env.EMAIL_USER);
  console.log('Email user:', process.env.EMAIL_PASS);


  // 1. Email to user (Thank You)
  const thankYouMail = {
    from: `"Krish Chem USA" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thank you for contacting Krish Chem USA',
    text: `Hi ${name},

Thank you for reaching out to Krish Chem USA. We have received your message and will get back to you as soon as possible.

Best regards,
Krish Chem USA Team
`,
  };

  // 2. Email to yourself with user details
  const notifyMeMail = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `
New message received from the contact form:

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Location: ${city}, ${state}, ${country}

Message:
${message}
    `
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(thankYouMail),
      transporter.sendMail(notifyMeMail),
    ]);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
