const nodemailer = require("nodemailer");

export const sendConfirmationEmail = async (userData) => {
  return new Promise((res, rej) => {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GOOGLE_USER_EMAIL,
        pass: process.env.NEXT_PUBLIC_GOOGLE_USER_PASSWORD,
      }
    });

    const url = `${process.env.NEXT_PUBLIC_NEXT_URL}?reset=true&token=${userData.token}`;
    const message = {
      from: process.env.NEXT_PUBLIC_GOOGLE_USER_EMAIL,
      to: userData.email,
      subject: "Reset your password",
      html: `<h3>
      Reset your password to <a href=${url} target="_blank">click</a> here.
      </h3>
      <br/>
      <p>Reset password link <a href=${url} target="_blank">${url}</a></p>
      `,
    }

    transport.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res({ info, link: url });
      }
    });
  });
}