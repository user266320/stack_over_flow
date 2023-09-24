import React from 'react';
import LeftSideBar from '../../compontents/LeftSideBar/LeftSideBar';
import RightSideBar from '../../compontents/RightSideBar/RightSideBar';
import MainHome from '../../compontents/MainHome/MainHome';

import '../../App.css';

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar/>
      <div className='home-container-2'>
          <MainHome/>
          <RightSideBar/>
      </div>
    </div>
  );
}

export default Questions;



