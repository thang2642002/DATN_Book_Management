const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const querystring = require("querystring");
const vnpayConfig = require("../config/configvnPay");

router.post("/create_payment_url", (req, res) => {
  const date = new Date();
  const createDate = date
    .toISOString()
    .slice(0, 19)
    .replace(/[-:]/g, "")
    .replace(/T/g, "");

  const ipAddr =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  const { amount, orderId } = req.body;

  let vnpParams = {
    vnp_Version: "2.1.0",
    vnp_Command: "pay",
    vnp_TmnCode: vnpayConfig.vnp_TmnCode,
    vnp_Locale: "vn",
    vnp_CurrCode: "VND",
    vnp_TxnRef: String(orderId),
    vnp_OrderInfo: `Thanh toán cho đơn hàng ${String(orderId)}`,
    vnp_OrderType: "other",
    vnp_Amount: (amount * 100).toString(),
    vnp_ReturnUrl: vnpayConfig.vnp_ReturnUrl,
    vnp_IpAddr: ipAddr,
    vnp_CreateDate: createDate,
  };

  vnpParams = sortObject(vnpParams);

  // Sử dụng URLSearchParams để tạo chuỗi ký tên
  const signData = new URLSearchParams(vnpParams).toString();
  const hmac = crypto.createHmac("sha512", vnpayConfig.vnp_HashSecret);
  const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");
  vnpParams["vnp_SecureHash"] = signed;

  const paymentUrl = `${vnpayConfig.vnp_Url}?${new URLSearchParams(
    vnpParams
  ).toString()}`;

  console.log("paymentUrl:", paymentUrl);
  console.log("vnpParams:", vnpParams);
  console.log("signData:", signData);
  console.log("signed:", signed);

  res.json({ paymentUrl });
});

router.get("/vnpay_return", (req, res) => {
  let vnp_Params = req.query;

  const secureHash = vnp_Params["vnp_SecureHash"];
  delete vnp_Params["vnp_SecureHash"];

  vnp_Params = sortObject(vnp_Params);

  // Sử dụng URLSearchParams để tạo chuỗi ký tên
  const signData = new URLSearchParams(vnp_Params).toString();
  const hmac = crypto.createHmac("sha512", vnpayConfig.vnp_HashSecret);
  const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");

  console.log("vnp_Params:", vnp_Params);
  console.log("signData:", signData);
  console.log("signed:", signed);
  console.log("secureHash from VNPAY:", secureHash);

  if (secureHash === signed) {
    res.send("Thanh toán thành công!");
  } else {
    res.send("Chữ ký không hợp lệ!");
  }
});

function sortObject(obj) {
  const sorted = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sorted[key] = obj[key];
    });
  return sorted;
}

module.exports = router;
