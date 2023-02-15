import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'


const Header = (props) => {
    return (
        <header className={classes.header}>
        <img
          src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
          alt="logo"
        />
        <div className={classes.loginBlock}>
           {props.isAuth  
           ?  <div>{props.login} - <button onClick={props.logout}>Log out</button></div>  
           :  <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    )
}


export default Header;