import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import photo from './../../../assets/image/user.png'
import c from './ProfilePerson.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfilePerson = (props) => {
 if(!props.profile) {
    return <Preloader/>
 }

 const onMainPhotoSelected = (e) => {
     if(e.target.files.length) {
      props.savePhoto(e.target.files[0]);
     }
 }
 
    return (   
    <div>
        <div className={c['profile-info']}>
      
        </div>


        <div className={c.person}>
          <div className={c.wrapPhoto}>
          <img
            className={c.userPhoto}
            src={props.profile.photos.large !== null ? props.profile.photos.large : photo}
            alt="loh"
          />
          <div className={c.sendPhoto}>
          {props.owner && <input type={'file'} id='sendFile' onChange={onMainPhotoSelected}/>}
          <label for='sendFile'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>image</title>
<path d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path>
<path d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
<path d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path>
</svg>

          </label>
          </div>
          </div>
          <div className={c.personInfo}>
            <div className={c.name}>{props.profile.fullName}</div>
            <ProfileStatusWithHooks status={props.status} UpdateStatus={props.UpdateStatus}/>
            <br />
            <div className={c.aboutMe}><b>About me:</b> {props.profile.aboutMe}</div>   
                  <ul className={c.siteList}>
                      <b>Contacts</b>
                      {Object.keys(props.profile.contacts).map(key => {
                         return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}  />
                      })}
                  </ul>
            
          </div>
        </div>
    </div>
    )

}
const Contacts = ({contactTitle, contactValue}) => {
    return <li className={c.contact}><b>{contactTitle}</b>: {contactValue}</li>
}
export default ProfilePerson;