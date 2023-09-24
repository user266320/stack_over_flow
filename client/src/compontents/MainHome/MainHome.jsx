import React from 'react';
import { useLocation,useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';

import './MainHome.css';
import QuestionsList from './QuestionsList';




const MainHome = () => {

  const user = 1;
  const navigate = useNavigate();

  
  const userLogin= () =>{
    if(user === null){
      alert("login or signup first to ask a question")
       navigate('/Login')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  const questionsList = useSelector(state => state.questionsReducer)
  
  /* var questionsList =[{

    _id: 1,
    upVotes: 3,
    downVotes: 2, 
    no0fAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js","react js"], 
    userPosted: "mano",
    askedOn: "jan 1",
    userId: 1,
     answer: [{
             answerBody: "Answer",
             userAnswered: 'kumar',
             answeredOn: "jan 2", userId: 2}]
},{ 
      _id: 2,
      upVotes: 3,
      downVotes: 2, 
      no0fAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "React.js", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [{
        answerBody: "Answer",
        userAnswered: 'kumar',
        answeredOn: "jan 2", userId: 2}]
  },{
        _id: 3,
        upVotes: 3,
        downVotes: 2, 
        no0fAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "React.js", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2", userId: 2}]
    }] */

   const location = useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
          {location.pathname === '/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>}
          <button  onClick={userLogin} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {questionsList.data === null ? <h1>Loading.....</h1>:
        <>
        <p>{questionsList.data.length} Questions</p>
        <QuestionsList questionsList={questionsList.data}/>
        </>}
      </div>
    </div>
  );
}

export default MainHome;
