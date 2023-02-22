import React, {  useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileFormData from "../ProfileFormData";
import photo from './../../../assets/image/user.png'
import c from './ProfilePerson.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfilePerson = (props) => {

  


 const [editMode, setEditMode] = useState(false);
 if(!props.profile) {
    return <Preloader/>
 }

 const onMainPhotoSelected = (e) => {
     if(e.target.files.length) {
      props.savePhoto(e.target.files[0]);
     }
 }

 const onSubmit =  (formData) => {
      props.saveProfile(formData).then(() => {
        
        setEditMode(false);
      });
        
      }  
 
    return (   
    <div>
        <div className={c.person}>
          <div className={c.wrapPhoto}>
          <img
            className={c.userPhoto}
            src={props.profile.photos.large !== null ? props.profile.photos.large : photo}
            alt="loh"
          />
        {props.owner && <div className={c.sendPhoto}>
          <input type={'file'} id='sendFile' onChange={onMainPhotoSelected}/>
          <label for='sendFile'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>image</title>
<path d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path>
<path d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
<path d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path>
</svg>
          </label>
      </div>}
    </div>
        
          {editMode ?  <ProfileFormData  profile={props.profile}  initialValues={props.profile} onSubmit={onSubmit}  /> : <ProfileData  {...props}/>}
        </div>
       {!editMode && props.owner ? <button onClick={() => setEditMode(true)}>Edit Mode</button> : null } 
    </div>
    )

}


const ProfileData = (props) => {
 return <div className={c.personInfo}>
  <div className={c.infoPerson}>{props.profile.fullName}</div>
  <ProfileStatusWithHooks status={props.status} owner={props.owner} UpdateStatus={props.UpdateStatus}/>
  <br />
  <div className={c.infoPerson}><b>About me:</b> {props.profile.aboutMe}</div>   
  <div className={c.infoPerson}><b>Job Description:</b> {props.profile.lookingForAJobDescription}</div>   
        <ul className={c.siteList}>
            <b>Contacts</b>
            {Object.keys(props.profile.contacts).map(key => {
               return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}  />
            })}
        </ul>
        
</div>
}


const Contacts = ({contactTitle, contactValue}) => {
    return <li className={c.contact}><b>{contactTitle}</b>: <a target="_blank" rel="noreferrer" href={contactValue}>{contactValue}</a></li>
}
export default ProfilePerson;