import React from 'react';
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

  // --- English Sample Content ---

  const listeningContent = (
    <div className="listening-section">
      {/* English Title */}
      <h2>Listening Section</h2> 
      {/* English Instructions */}
      <p>Listen to the following audio clip and answer the question below.</p> 
      <audio controls style={{ width: '100%', marginTop: '20px' }}>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        {/* English Question */}
        <p><strong>Question 1:</strong> Where are the speakers?</p> 
        <label><input type="radio" name="q1" value="a" /> A) At an airport</label><br/>
        <label><input type="radio" name="q1" value="b" /> B) At a train station</label><br/>
        <label><input type="radio" name="q1" value="c" /> C) At a supermarket</label><br/>
      </div>
    </div>
  );

  const readingContent = (
    <div className="reading-section" style={{ textAlign: 'left' }}>
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
     <div className="writing-section" style={{ textAlign: 'left' }}>
       {/* English Title */}
       <h2>Writing Section (Task 2)</h2> 
       {/* English Prompt */}
       <p><strong>Prompt:</strong> Some people believe that technology has made our lives too complex, while others think it has simplified them. Discuss both views and give your own opinion.</p> 
       <p>Write at least 250 words.</p>
       <textarea 
         rows="15" 
         style={{ width: '100%', marginTop: '15px', padding: '10px', fontSize:'1rem' }} 
         placeholder="Start writing your essay here..."
       ></textarea>
     </div>
  );

  const speakingContent = (
    <div className="speaking-section" style={{ textAlign: 'left' }}>
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
       <p style={{marginTop: '20px', fontStyle: 'italic'}}>(In a real test, you would record your answers to these questions.)</p>
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

  return (
    <div className="test-page-container">
      <header className="test-header">
         {/* English Title */}
        <h1 className="test-title">Test: {skillName} Skill</h1> 
        <CountdownTimer initialMinutes={timerMinutes} /> 
      </header>
      <div className="test-content">
        {currentContent} 
         {/* English Button */}
        <button onClick={handleSubmitTest} className="submit-button">Submit Section</button> 
      </div>
    </div>
  );
}

export default TestPage;