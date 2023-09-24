import React,{ useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector,useDispatch, } from "react-redux";
import decode from 'jwt-decode'

import './Navbar.css'
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
import  Avatar from '../../compontents/Avatar/Avatar';
import { setCurrentUser } from '../../actions/currentUsers';
const Navbar = () => {
    const dispatch =useDispatch()
    const navigate = useNavigate()
    var User = useSelector((state)=>(state.currentUserReducer))
    const handleLogout =()=>{
      dispatch({type:"LOGOUT"})
      navigate('/')
      dispatch(setCurrentUser(null))
      
    }
    useEffect(()=>{
      const token = User?.token
      if (token){
        const decodedToken = decode(token)
        if (decodedToken.exp * 1000 < new Date().getTime()){
          console.log(decodedToken.exp * 1000 < new Date().getTime());
          handleLogout()
        }
      }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))))

    },[dispatch])
  return (
    <nav className='main-nav'>
      <div className = "navbar">
           <Link to='/' className='nav-iteam nav-logo'>
            <img src={logo} alt='logo'/>
           </Link>
           <Link to='/' className='nav-iteam nav-btn'>About</Link>
           <Link to='/' className='nav-iteam nav-btn'>Products</Link>
           <Link to='/' className='nav-iteam nav-btn'>For Teams</Link>
           <form className='navbar-form'>
            <input type='text' placeholder='Search....' />
            <img className='search-icon' src={search} alt="search" width='18px'/>
           </form>
           {User === null ? (
            <Link  to='/Login' className='nav-iteam nav-link'>Login</Link>
            
           ):<>
          <Avatar backgroundColor='#009dff'  px='10px' py='7px' borderRadius='50%' color="white">< Link to={`/Users/${User?.result?._id}`} style={{color:'white',textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
           <button onClick={handleLogout} className='nav-link nav-iteam'>Logout</button>
           </>}
      </div>
    </nav>
  );
}

export default Navbar;
