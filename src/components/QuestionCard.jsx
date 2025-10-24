import React from 'react';
import Choices from './Choices';
import './QuestionCard.css';

function QuestionCard({ questionData, selectedAnswer, onSelectAnswer }) {
  const { question, options } = questionData;

  return (
    <div className="question-card">
      <h3>{question}</h3>
      <Choices
        options={options}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
}

export default QuestionCard;