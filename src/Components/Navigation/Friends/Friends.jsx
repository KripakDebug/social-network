import React from "react";

import c from './Friends.module.css';
import userPhoto from './../../../assets/image/user.png'
import { NavLink } from "react-router-dom";

const Friends = (props) => {
    return (
        <div className={c.friends}>
                <h1 className={c.title}>Friends</h1>
                <div className={c.friend}>
                {props.friend.map(user => <div key={user.id} className={c.friendItem}><img alt="photoUser" src={user.photos.small != null ? user.photos.small : userPhoto} className={c.logo}/> <NavLink to={`/profile/${user.id}`}>{user.name}</NavLink>  </div>)}
                </div>
        </div>
    )
}


export default Friends;