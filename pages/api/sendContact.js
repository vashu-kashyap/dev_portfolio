import nodemailer from "nodemailer";

export default async (req, res) => {
  console.log(req.method);

  if (req.method === "POST") {
    const { name,  email, phone, message } =
      req.body;

    // Set up your Gmail SMTP configuration with the App Password
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: `vashukashyap87@gmail.com`,
        pass: `${process.env.G_PASS}`, // Use your own app password here
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      // Send the email
      const mailInfo = await transporter.sendMail({
        from: `${email}`,
        to: `vashukashyap87@gmail.com`,
        subject: `New Contact Form Submission: `,
        text: `
          Name: ${name},
          Email: ${email},
          Phone: ${phone},
          Message: ${message},
        `,
      });

      console.log('Message sent:', mailInfo);

      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'An error occurred while submitting the form.' });
    }
  } else {
    console.log("GET request received");
  }
};
