const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "depro10.fcomet.com",
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: true,
  },
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
  }
});

// Handles POST requests to /api

export async function contactUs({userEmail, subject, name, surname, message}) {

  return await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: 'zohair.ali.mirza@gmail.com',
    replyTo: userEmail,
    subject: subject,
    html: `
      <div>
        <p>Name: ${name} </p>
        <p>Surname: ${surname} </p>
        <p>Email: ${surname} </p>
        <p>Message: ${message} </p>
      </div>
    `,
  })
}

export async function notifyOrder() {
  return await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: 'ruthel.crab@gmail.com',
    replyTo: 'balockruthel.cedrickascens@gmail.com',
    subject: 'PAYMENT OF THE STARMAP DONE WITH SUCCESS',
    html: `PAYMENT DONE`,
  })
}
export async function sendProduct(map) {
  return await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: 'ruthel.crab@gmail.com',
    replyTo: 'balockruthel.cedrickascens@gmail.com',
    subject: 'PAYMENT OF THE STARMAP DONE WITH SUCCESS',
    html: `PAYMENT DONE`,
    attachments: [
      {
        filename: 'image.jpg',
        content: map.data,
        encoding: 'base64'
      }
    ]
  })
}