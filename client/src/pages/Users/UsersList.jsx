import React from 'react';
import { useSelector} from 'react-redux'
import User from './User'
import './user.css'

const UsersList = () => {
  const user = useSelector((state) => state.usersReducer)
  

  return (
    <div className='userList-container'>
      {
        user.map((user)=>(
          <User user={user} key={user?._id} />
        ))
      }
    </div>
  );
}

export default UsersList;
