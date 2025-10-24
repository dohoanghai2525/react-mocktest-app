import React from 'react';
import { Link } from 'react-router-dom';

function ResultsPage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#fff', margin: '30px auto', maxWidth: '600px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
      <h2>Test Submitted!</h2>
      <p>Your mock test has been submitted.</p>
      {/* Chúng ta chưa có kết quả thật */}
      <p>Phần xử lý kết quả chỉ là giả lập trong phiên bản này.</p>
      <Link to="/dashboard">
        <button style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
            Quay lại Dashboard
        </button>
      </Link>
    </div>
  );
}

export default ResultsPage;