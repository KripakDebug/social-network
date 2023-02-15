import React from "react";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import classes from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : ''  }>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/messages" className = { navData => navData.isActive ? classes.active : '' }>Messages</NavLink>
          </li>
          <li>
            <NavLink to="/news" className = { navData => navData.isActive ? classes.active : '' }>News</NavLink>
          </li>
          <li>
            <NavLink to="/music" className = { navData => navData.isActive ? classes.active : '' }>Music</NavLink>
          </li>
          <br />
          <li>
            <NavLink to="/users" className = { navData => navData.isActive ? classes.active : '' }>Find Users</NavLink>
          </li>
          <br />
          <li>
            <NavLink to="/settings" className = { navData => navData.isActive ? classes.active : '' }>Settings</NavLink>
          </li>
                <FriendsContainer  />
        </ul>
      </nav>
    )
}


export default Navigation;