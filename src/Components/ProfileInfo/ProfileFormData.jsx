import React, { useEffect } from "react";
import { reduxForm } from "redux-form";
import { CreateField, Element } from "../common/FormsControls/FormsControls";
import c from './ProfilePerson/ProfilePerson.module.css'
import s from './../common/FormsControls/FormsControls.module.css'


const ProfileFormData = (props) => {

    useEffect(() => {
        props.initialize(props.profile)
    }, [])

    const Input = Element('input')
    const TextArea = Element('textarea')
    
        return (
<form onSubmit={props.handleSubmit}>
  <div className={c.name}>FullName: {CreateField("Full name", 'fullName', Input, null, "text", null)}</div>
  <br />
  <div className={c.aboutMe}><b>About me:</b> {CreateField("About Me", 'aboutMe', Input, null, "text", null)}</div>   
  <div ><b>LookingForAJobDescription:</b> {CreateField("Job Description", 'lookingForAJobDescription', TextArea, null, null, null)}</div>   
        <ul className={c.siteList}>
            <b>Contacts</b>
            {Object.keys(props.profile.contacts).map(key => {
               return <li key={key} className={c.contact}>
                    <b>{key}: {CreateField(key, 'contacts.'+ key, Input, null, "text", null)}</b>
               </li>
            })}
        </ul>
    {props.error && <div className={s.formSummaryError}>{props.error}</div>}
        <button>save</button>
    
</form>
        )
      
}

const ProfileFormDataReduxForm = reduxForm({form: 'changeProfile', enableReinitialize: true})(ProfileFormData)
export default ProfileFormDataReduxForm;

