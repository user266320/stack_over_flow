import React from 'react';
import RightSideBar from '../../compontents/RightSideBar/RightSideBar';
import LeftSideBar from '../../compontents/LeftSideBar/LeftSideBar';
import QuestionsDetails from './QuestionsDetails';

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar/>
      <div className='home-container-2'>
          <QuestionsDetails/>
          <RightSideBar/>
      </div>
    </div>
  );
}

export default DisplayQuestion;
