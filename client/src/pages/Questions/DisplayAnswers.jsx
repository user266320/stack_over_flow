import React from 'react';
import { Link,useParams } from 'react-router-dom';
import moment  from 'moment'
import {useSelector , useDispatch} from 'react-redux';


import Avatar from '../../compontents/Avatar/Avatar';
import {deleteAnswer} from '../../actions/questions'

const DisplayAnswers = ({question,handleShare}) => {
  const {id}=useParams();

  const User = useSelector((state)=>(state.currentUserReducer))
  const dispatch = useDispatch()
  const handleDelete = (answerId,noOfAnswers) =>{
    dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
  }
        
  return (
    <div>
      {question.answer.map((each)=>(
        
        <div className='display-ans' key={each._id}>
            <p>{each.answerBody}</p>
            <div className='question-actions-user'>
                <div>
                    <button type='button' onClick={handleShare}>Share</button>
                   
                    {User?.result?._id === each?.userId && (
                                 <button type="button" onClick={()=> handleDelete(each._id,question.noOfAnswers)} >
                                 Delete
                               </button>
                          )}

                </div>
                <div>
                    <p>answered on {moment(each.answerOn).fromNow()}</p>
                    <Link to={`/User/:${each.userId}`} className='user-link' style={{color:'#0086b8'}}>
                      <Avatar backgroundColor="green" px='8px' py='5px'>{each.userAnswered.charAt(0).toLocaleUpperCase()}</Avatar>
                      <div>
                        {each.userAnswered}
                      </div>
                     </Link>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayAnswers;
