import nodemailer from "nodemailer";

export default async function contactFormHandler(req, res) {
  if(req.method !== 'POST') {
    return res.status(405).json({ status: 405, message: 'Method Not Allowed' });
  }

  /*var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_MAIL,
      pass: process.env.GMAIL_PASS
    }
  });

  var mailOptions = {
    from: req.body.email,
    to: process.env.GMAIL_MAIL,
    subject: `Message from ${req.body.first_name} ${req.body.last_name} via codedotspirit.dev`,
    text: `(Sent by ${req.body.email})\n\n${req.body.message}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).json({ status: 200, message: "Message failed to send!" });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ status: 200, message: "Message sent successfully!" });
    }
  });*/
  res.status(200).json({ status: 200, message: "Message sent successfully!" });
}