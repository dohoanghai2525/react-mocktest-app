import React from 'react';
import './Choices.css';

function Choices({ options, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="choices-container">
      {options.map((option) => (
        <button
          key={option}
          className={`choice-button ${option === selectedAnswer ? 'selected' : ''}`}
          onClick={() => onSelectAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Choices;