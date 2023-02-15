import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import photo from './../../../assets/image/user.png'
import c from './ProfilePerson.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfilePerson = (props) => {
 if(!props.profile) {
    return <Preloader/>
 }
 
    return (   
    <div>
        <div className={c['profile-info']}>
      
        </div>


        <div className={c.person}>
          <img
            className={c.userPhoto}
            src={props.profile.photos.large !== null ? props.profile.photos.large : photo}
            alt="loh"
          />
          <div className={c.personInfo}>
            <div className={c.name}>{props.profile.fullName}</div>
            <ProfileStatusWithHooks status={props.status} UpdateStatus={props.UpdateStatus}/>
            <br />
            <div className={c.aboutMe}>{props.profile.aboutMe}</div>
            <div className={c.city}>City: Minck</div>
            <div className={c.education}>Education BSU '11</div>
           
                  <ul className={c.siteList}>
                   
                  </ul>
            
          </div>
        </div>
    </div>
    )
}
export default ProfilePerson;