const express = require('express');
const app = express();

// --- THÊM DÒNG NÀY ---
// Dòng này là bắt buộc để server có thể đọc được JSON
// mà Postman gửi lên trong các request POST
app.use(express.json());
// --- HẾT DÒNG THÊM ---

// Chọn một cổng cho backend, ví dụ 3001
const PORT = process.env.PORT || 3001; 

// --- 1. HEALTH ENDPOINT (Giữ nguyên) ---
app.get('/health', (req, res) => {
  console.log("Health check được gọi!");
  res.status(200).send('Backend is healthy and running!');
});

// --- 2. TẠO DỮ LIỆU GIẢ (Fake Database) ---
let mockUsers = [
  { id: 1, name: "Hoang Hai" },
  { id: 2, name: "Gemini" }
];

// --- 3. CÁC API MỚI ĐỂ TEST ---

// API 1: Lấy tất cả users (GET /api/users)
app.get('/api/users', (req, res) => {
  res.status(200).json(mockUsers);
});

// API 2: Lấy 1 user theo ID (GET /api/users/:id)
app.get('/api/users/:id', (req, res) => {
  const user = mockUsers.find(u => u.id === parseInt(req.params.id));
  
  if (user) {
    res.status(200).json(user);
  } else {
    // API để test lỗi 404
    res.status(404).json({ error: 'User not found' });
  }
});

// API 3: Tạo user mới (POST /api/users)
app.post('/api/users', (req, res) => {
  // API để test lỗi 400
  if (!req.body || !req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = {
    id: mockUsers.length + 1, // ID tự tăng đơn giản
    name: req.body.name
  };
  mockUsers.push(newUser);
  
  // API để test status 201 (Created)
  res.status(201).json(newUser);
});


// (Giữ nguyên dòng app.listen)
app.listen(PORT, () => {
  console.log(`Backend server đang chạy trên http://localhost:${PORT}`);
});
