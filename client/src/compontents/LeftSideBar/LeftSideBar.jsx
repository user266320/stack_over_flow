import React from 'react';
import { NavLink } from "react-router-dom";
import global from '../../assets/Globe.svg';

import './LeftSideBar.css';

const LeftSideBar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to="/" className="side-nav-link" activeClassName="active" >
           <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
         <div>
          <p>PUBLIC</p>
          </div>
         <NavLink to="/Questions" className="side-nav-link " activeClassName="active"  >
            <img src={global} alt="global"/>
            <p style={{paddingLeft:"10px"}}>Questions</p>
         </NavLink>
         <NavLink to="/Tags" className="side-nav-link" activeClassName="active">
            <p style={{paddingLeft:"35px"}}>Tags</p>
         </NavLink>
         <NavLink to="/Users" className="side-nav-link" activeClassName="active">
            <p style={{paddingLeft:"35px"}}>Users</p>
         </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default LeftSideBar;
