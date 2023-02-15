import React from "react";
import Paginator from "./Paginator";
import User from "./User";


const FindUsers = (props) => {
  
      return (
        <div>
          <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}  />
          {props.users.map((user) => {
                
              return (
                <User user={user} followingIsProgress={props.followingIsProgress} Follow={props.Follow} Unfollow={props.Unfollow}/>
              )
            
            
          })}
        </div>
      );
    }


export default FindUsers;
