import React from "react";
import c from './FindUsers.module.css';
import userPhoto from './../../assets/image/user.png';
import { NavLink } from "react-router-dom";


const User = ({user, followingIsProgress, Follow, Unfollow}) => {
  
      return (
            <div key={user.id}>
               
              <span>
                <div>
                 <NavLink to={`/profile/${user.id}`}>
                 <img className={c.img} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                 </NavLink>
                </div>
                { !user.followed ?
                 <button disabled={followingIsProgress.some(id => id === user.id)} onClick={ () => {
                      Follow(user.id)
          }}>Follow</button> 
                 : <button disabled={followingIsProgress.some(id => id === user.id)} onClick={ () => { 
                       Unfollow(user.id)
                 }}>UnFollow</button> }
    
              </span>
              <span>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </span>
                <span>
                   
                </span>
              </span>
            </div>
      )
            
            
      
    }


export default User;
