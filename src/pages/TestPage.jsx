import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import CountdownTimer from '../components/CountdownTimer.jsx';
import './TestPage.css';

// Receive onCompleteSkill from App.jsx
function TestPage({ onCompleteSkill }) { 
  const { skillName } = useParams();
  const navigate = useNavigate(); 

  const handleSubmitTest = () => {
    alert(`Submitted ${skillName} test!`); 
    onCompleteSkill(skillName); // Mark skill as complete in App.jsx
    navigate('/dashboard'); 
  };

  // Local state for simple scoring/time summary
  const [answers, setAnswers] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(null);

  const handleSelect = (qKey, value) => {
    setAnswers(prev => ({ ...prev, [qKey]: value }));
  };

  // --- English Sample Content ---

  const listeningContent = (
    <div className="listening-section">
      {/* English Title */}
      <h2>Listening Section</h2> 
      {/* English Instructions */}
      <p>Listen to the following audio clip and answer the question below.</p> 
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="listening-choices">
        {/* English Question */}
        <p><strong>Question 1:</strong> Where are the speakers?</p> 
        <label><input type="radio" name="q1" value="a" onChange={() => handleSelect('q1','a')} checked={answers['q1']==='a'} /> A) At an airport</label><br/>
        <label><input type="radio" name="q1" value="b" onChange={() => handleSelect('q1','b')} checked={answers['q1']==='b'} /> B) At a train station</label><br/>
        <label><input type="radio" name="q1" value="c" onChange={() => handleSelect('q1','c')} checked={answers['q1']==='c'} /> C) At a supermarket</label><br/>
      </div>
    </div>
  );

  const readingContent = (
    <div className="reading-section">
      {/* English Title */}
      <h2>Reading Section</h2> 
      {/* English Instructions */}
      <p><strong>Read the passage and answer the question:</strong></p> 
      <p>Technology has advanced rapidly in the 21st century. The internet connects billions of people worldwide, allowing for instant communication and access to vast amounts of information. However, this constant connectivity also raises concerns about privacy and the spread of misinformation.</p>
      <hr/>
      {/* English Question */}
      <p><strong>Question 1:</strong> What is a major benefit of the internet mentioned in the passage?</p> 
       <label><input type="radio" name="q1" value="a" /> A) Enhanced privacy</label><br/>
       <label><input type="radio" name="q1" value="b" /> B) Instant communication</label><br/>
       <label><input type="radio" name="q1" value="c" /> C) Reduced misinformation</label><br/>
    </div>
  );
  
  const writingContent = (
     <div className="writing-section">
       {/* English Title */}
       <h2>Writing Section (Task 2)</h2> 
       {/* English Prompt */}
       <p><strong>Prompt:</strong> Some people believe that technology has made our lives too complex, while others think it has simplified them. Discuss both views and give your own opinion.</p> 
       <p>Write at least 250 words.</p>
      <textarea 
        rows="15" 
        className="writing-textarea"
        placeholder="Start writing your essay here..."
      ></textarea>
     </div>
  );

  const speakingContent = (
    <div className="speaking-section">
      {/* English Title */}
      <h2>Speaking Section (Part 1)</h2> 
      {/* English Prompt */}
      <p>Let's talk about your hometown or city.</p> 
      <ul>
        <li>What kind of place is it?</li>
        <li>What’s the most interesting part of your town/city?</li>
        <li>What kind of jobs do the people in your town/city do?</li>
        <li>Would you say it is a good place to live? (Why?)</li>
      </ul>
      <p className="speaking-note">(In a real test, you would record your answers to these questions.)</p>
    </div>
  );
  
  // --- End of sample content ---

  let currentContent;
  let timerMinutes = 60; 
  if (skillName === 'listening') { currentContent = listeningContent; timerMinutes = 40; } 
  else if (skillName === 'reading') { currentContent = readingContent; timerMinutes = 60; } 
  else if (skillName === 'writing') { currentContent = writingContent; timerMinutes = 60; } 
  else if (skillName === 'speaking') { currentContent = speakingContent; timerMinutes = 15; } 
  else { currentContent = <p>Invalid skill.</p>; }

  const score = useMemo(() => {
    // Demo answer key (extend per skill as needed)
    const correct = { q1: 'b' };
    let total = 0;
    let correctCount = 0;
    Object.keys(correct).forEach(k => {
      total += 1;
      if (answers[k] && answers[k] === correct[k]) correctCount += 1;
    });
    return { total, correct: correctCount, percent: total ? Math.round((correctCount/total)*100) : 0 };
  }, [answers]);

  return (
    <div className="test-page-container">
      <div className="test-layout">
        <div>
          <header className="test-header">
            <h1 className="test-title">Test: {skillName} Skill</h1>
            <CountdownTimer initialMinutes={timerMinutes} onChangeSecondsLeft={setSecondsLeft} />
          </header>
          <div className="test-content">
            {currentContent}
          </div>
        </div>
        <aside className="test-aside">
          <div className="card test-aside-card">
            <h3 className="aside-title">Hướng dẫn nhanh</h3>
            <ul className="aside-list">
              <li>Kiểm tra âm lượng trước khi làm bài.</li>
              <li>Đọc kỹ yêu cầu trước khi trả lời.</li>
              <li>Quản lý thời gian hợp lý.</li>
            </ul>
          </div>
          <div className="card test-aside-card">
            <h3 className="aside-title">Tóm tắt</h3>
            <div className="aside-summary">
              <div className="row"><span>Câu đã trả lời</span><span>{Object.keys(answers).length}</span></div>
              <div className="row"><span>Câu đúng (tạm tính)</span><span>{score.correct}/{score.total}</span></div>
              <div className="row"><span>Còn lại</span><span>{Math.max(score.total - score.correct, 0)}</span></div>
              <div className="row"><span>Thời gian còn lại</span><span>{secondsLeft !== null ? Math.floor(secondsLeft/60)+":"+String(secondsLeft%60).padStart(2,'0') : '--:--'}</span></div>
            </div>
          </div>
        </aside>
      </div>
      <div className="submit-bar">
        <div className="submit-bar-inner">
          <span className="submit-hint">Hãy kiểm tra lại câu trả lời trước khi nộp.</span>
          <button onClick={() => { alert(`Kết quả tạm tính: ${score.correct}/${score.total} (${score.percent}%).`); handleSubmitTest(); }} className="btn btn-primary">Nộp bài</button>
        </div>
      </div>
    </div>
  );
}

export default TestPage;