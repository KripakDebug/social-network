import React, {  useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileFormData from "../ProfileFormData";
import photo from './../../../assets/image/user.png'
import c from './ProfilePerson.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ToTopOutlined} from "@ant-design/icons";

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
          <ToTopOutlined/>
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