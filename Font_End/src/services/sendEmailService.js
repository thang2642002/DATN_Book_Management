import axios from "../utils/axiosCustommize";

const SendEmail = (email, orderDetails) => {
  // Trích xuất thông tin từ orderDetails
  const { listBuy, totalPrice } = orderDetails;

  // Chuẩn bị nội dung email dưới dạng HTML
  let emailContent = `
    <p>Thank you for your order! Here are your order details:</p>
    <table border="1" cellpadding="5" cellspacing="0">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Thêm thông tin từng sản phẩm vào bảng
  listBuy.forEach((item) => {
    emailContent += `
      <tr>
        <td>${item.Book.title}</td>
        <td>${item.quantity}</td>
        <td>${item.Book.price}</td>
        <td>${item.quantity * item.Book.price}</td>
      </tr>
    `;
  });

  // Thêm tổng tiền vào bảng
  emailContent += `
      <tr>
        <td colspan="3" align="right"><strong>Total Price:</strong></td>
        <td><strong>${totalPrice}</strong></td>
      </tr>
    </tbody>
  </table>
  `;

  // Gửi email với nội dung đã chuẩn bị
  return axios.post(`/api/sendemail/send-order`, {
    email,
    orderDetails: emailContent, // Gửi nội dung email đã chuẩn bị dưới dạng HTML
  });
};

export { SendEmail };
