import React from 'react';
import { Link } from 'react-router-dom';
import './ResultsPage.css';

function ResultsPage() {
  return (
    <div className="results-card">
      <h2 className="results-title">Test Submitted!</h2>
      <p className="results-text">Your mock test has been submitted.</p>
      <p className="results-text">Phần xử lý kết quả chỉ là giả lập trong phiên bản này.</p>
      <Link to="/dashboard">
        <button className="btn btn-primary" style={{ marginTop: '16px' }}>
            Quay lại Dashboard
        </button>
      </Link>
    </div>
  );
}

export default ResultsPage;