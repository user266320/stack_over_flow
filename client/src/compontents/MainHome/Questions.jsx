import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Questions = ({each}) => {
  
  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
        <p>{each.upVote.length - each.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className='display-votes-ans'>
        <p>{each.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className='display-question-details'>
          <Link to={`/Questions/${each._id}`} className='question-title-link'  > {each.questionTitle}</Link>
          <div className='display-tags-time'>
            <div className='display-tags'>
                {each.questionTags.map((tag)=> (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
            <p className='display-time'>asked on {moment(each.askedOn).fromNow()} by {each.userPosted}</p>
          </div>
      </div>
    </div>
  );
}

export default Questions;
