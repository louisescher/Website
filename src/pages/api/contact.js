import nodemailer from "nodemailer";

export default async function contactFormHandler(req, res) {
  if(req.method !== 'POST') {
    return res.status(405).json({ status: 405, message: 'Method Not Allowed' });
  }

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_MAIL,
      pass: process.env.GMAIL_PASS
    }
  });

  var formdata = JSON.parse(req.body);

  var mailOptions = {
    from: formdata.email,
    to: process.env.GMAIL_MAIL,
    subject: `Message from ${formdata.name} via codedotspirit.dev`,
    text: `(Sent by ${formdata.email})\n\n${formdata.message}`
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return res.status(500).json({ status: 200, message: "Message failed to send!" });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ status: 200, message: "Message sent successfully!" });
    }
  });
}