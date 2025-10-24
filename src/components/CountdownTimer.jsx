import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // File CSS cho đồng hồ

// Component này nhận vào một prop là `initialMinutes` (số phút ban đầu)
function CountdownTimer({ initialMinutes = 45 }) {
  // Chuyển phút thành giây
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);

  // Đây là "bộ não" của đồng hồ
  useEffect(() => {
    // Nếu hết giờ, dừng lại
    if (secondsLeft <= 0) {
      return;
    }

    // Tạo một bộ đếm thời gian, chạy 1 lần mỗi giây
    const timerId = setInterval(() => {
      setSecondsLeft(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Dọn dẹp bộ đếm khi component bị gỡ bỏ
    return () => clearInterval(timerId);
  }, [secondsLeft]); // Chạy lại hiệu ứng này mỗi khi 'secondsLeft' thay đổi

  // Tính toán phút và giây còn lại
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="countdown-timer">
      <span>{String(minutes).padStart(2, '0')}</span>
      :
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}

export default CountdownTimer;