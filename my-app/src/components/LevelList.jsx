import React, { useState } from 'react';
import QuestionList from './QuestionList';

const LevelList = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
      console.log(index)
      setActiveIndex(index);
  };

  return (
    <>
      {questions.map((question, index) => 
        <li key={index} 
          onClick={() => handleClick(index)} 
          className={index === activeIndex ? 'red sub-list question-list': 'sub-list question-list'}>
          <span>{question.level}</span>
          <ol className={index === activeIndex ? 'black show-questions': 'hide-questions'}>
            <QuestionList leetcodeQuestions={question.leetcode} />
          </ol>
        </li>
      )}
    </>
  );
}

export default LevelList;
