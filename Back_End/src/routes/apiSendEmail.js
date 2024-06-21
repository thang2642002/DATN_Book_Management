const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send-order", (req, res) => {
  const { email, orderDetails } = req.body;

  // Kiểm tra email và orderDetails có tồn tại không
  if (!email || !orderDetails) {
    return res.status(400).send("Email and order details are required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tranthang0369@gmail.com",
      pass: "bkdv ujpo faas jstr",
    },
  });
  const mailOptions = {
    from: "tranthang0369@gmail.com",
    to: email,
    subject: "Order Confirmation",
    html: orderDetails,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Order confirmation email sent!");
  });
});

module.exports = router;
