const express = require('express');
const app = express();

// Bắt buộc: Dùng để đọc JSON từ body (cho POST và PUT)
app.use(express.json());

const PORT = process.env.PORT || 3001;

// --- 1. HEALTH ENDPOINT (Giữ nguyên) ---
app.get('/health', (req, res) => {
  console.log("Health check được gọi!");
  res.status(200).send('Backend is healthy and running!');
});

// --- 2. TẠO DỮ LIỆU GIẢ (Mock Database cho Questions) ---
let mockQuestions = [
  { 
    id: 1, 
    questionText: "Docker la gi?", 
    answerText: "La mot nen tang container hoa." 
  },
  { 
    id: 2, 
    questionText: "CRUD la gi?", 
    answerText: "La Create, Read, Update, Delete." 
  }
];
let nextQuestionId = 3; // Dùng để tự động tăng ID

// --- 3. BỘ API CRUD HOÀN CHỈNH CHO "QUESTIONS" ---

/**
 * [CREATE] - POST /api/questions
 * Tạo một câu hỏi mới.
 */
app.post('/api/questions', (req, res) => {
  const { questionText, answerText } = req.body;

  // Tiêu chí: basic validation present (có validation cơ bản)
  if (!questionText || !answerText) {
    return res.status(400).json({ error: 'questionText and answerText are required' });
  }

  const newQuestion = {
    id: nextQuestionId++,
    questionText: questionText,
    answerText: answerText
  };
  mockQuestions.push(newQuestion);
  
  // Tiêu chí: correct status codes (đúng status code)
  res.status(201).json(newQuestion); // 201 = Created
});

/**
 * [READ] - GET /api/questions
 * Lấy tất cả câu hỏi.
 */
app.get('/api/questions', (req, res) => {
  res.status(200).json(mockQuestions);
});

/**
 * [READ] - GET /api/questions/:id
 * Lấy 1 câu hỏi theo ID.
 */
app.get('/api/questions/:id', (req, res) => {
  const question = mockQuestions.find(q => q.id === parseInt(req.params.id));
  
  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).json({ error: 'Question not found' });
  }
});

/**
 * [UPDATE] - PUT /api/questions/:id
 * Cập nhật một câu hỏi. (Bạn cũng có thể dùng PATCH)
 */
app.put('/api/questions/:id', (req, res) => {
  const { questionText, answerText } = req.body;
  const questionId = parseInt(req.params.id);
  const questionIndex = mockQuestions.findIndex(q => q.id === questionId);

  // Validation
  if (!questionText || !answerText) {
    return res.status(400).json({ error: 'questionText and answerText are required' });
  }
  if (questionIndex === -1) {
    return res.status(404).json({ error: 'Question not found' });
  }

  // Cập nhật câu hỏi
  mockQuestions[questionIndex] = { 
    id: questionId, 
    questionText: questionText, 
    answerText: answerText 
  };
  
  res.status(200).json(mockQuestions[questionIndex]); // 200 = OK
});

/**
 * [DELETE] - DELETE /api/questions/:id
 * Xóa một câu hỏi.
 */
app.delete('/api/questions/:id', (req, res) => {
  const questionId = parseInt(req.params.id);
  const questionIndex = mockQuestions.findIndex(q => q.id === questionId);

  if (questionIndex === -1) {
    return res.status(404).json({ error: 'Question not found' });
  }

  // Xóa câu hỏi
  mockQuestions.splice(questionIndex, 1);
  
  res.status(204).send(); // 204 = No Content (Xóa thành công, không trả về gì)
});


// --- 4. KHỞI ĐỘNG SERVER (Giữ nguyên) ---
app.listen(PORT, () => {
  console.log(`Backend server (CRUD) đang chạy trên http://localhost:${PORT}`);
});

