import multer from "multer";
import fs from "fs-extra";

// Khởi tạo Multer
const upload = multer({ dest: "uploads/" });

// Middleware Multer để xử lý tệp hình ảnh
const uploadImage = async (req, res, next) => {
  try {
    // Kiểm tra xem tệp hình ảnh có được tải lên không
    if (!req.file) {
      throw new Error("No image uploaded");
    }

    // Đọc dữ liệu từ tệp hình ảnh
    const imageData = await fs.readFile(req.file.path);

    // Chuyển đổi dữ liệu hình ảnh thành chuỗi base64
    const base64Image = imageData.toString("base64");

    // Thêm thuộc tính base64Image vào req.body để sử dụng trong route sau này
    req.body.base64Image = base64Image;

    // Xóa tệp hình ảnh sau khi đã xử lý
    await fs.unlink(req.file.path);

    // Tiếp tục chuyển đổi hoặc xử lý tệp ảnh nếu cần
    // Ví dụ: fs.unlink(req.file.path); // Xóa tệp đã tải lên sau khi đã sử dụng

    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { upload, uploadImage };
