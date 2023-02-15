import React from "react";
import { NavLink } from "react-router-dom";
import c from './../Dialogs.module.css'

const User = ({ id, name }) => {
    return (
      <li className={c.user}>
        <NavLink
          to={"/messages/" + id}
          className={(navData) => (navData.isActive ? c.active : "")}
        >
          {name}
        </NavLink>
      </li>
    );
  };


  export default User;