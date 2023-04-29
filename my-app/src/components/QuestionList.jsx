import React from 'react'

const QuestionList = ({leetcodeQuestions}) => {
  return (
    <>
        {leetcodeQuestions.map((question, index) => 
        <li key={index}>
          <div className='align-button'>
            <a href={question.link}><span>{question.name}</span></a><button>{question.answer}</button>
          </div>
          
        </li>
      )}
    </>
  )
}

export default QuestionList