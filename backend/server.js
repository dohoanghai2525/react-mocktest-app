const express = require('express');
const app = express();

// Chọn một cổng cho backend, ví dụ 3001
const PORT = process.env.PORT || 3001; 

// Tạo /health endpoint
app.get('/health', (req, res) => {
  console.log("Health check được gọi!");
  res.status(200).send('Backend is healthy and running!');
});

// (Sau này bạn sẽ thêm các API để React gọi vào đây)

app.listen(PORT, () => {
  console.log(`Backend server đang chạy trên http://localhost:${PORT}`);
});