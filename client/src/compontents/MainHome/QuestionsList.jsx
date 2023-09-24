import React from 'react';
import Questions from './Questions';

const QuestionsList = ({questionsList}) => {
  return (
    <>
      {
        questionsList.map((each) => (
            <Questions each={each} key={each.id}/>
          ))
      }
    </>
  );
}

export default QuestionsList;
