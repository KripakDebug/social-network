import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Element } from "../common/FormsControls/FormsControls";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";
import User from "./User/User";


const maxLength50 = maxLengthCreator(50);



const SendMessage = (props) => {
  const Textarea = Element('textarea')
  return (
    <form onSubmit={props.handleSubmit} className={c.sendMessage}>
      <Field name="newMessageText" component={Textarea} validate={[required, maxLength50]} placeholder='Enter your message'/>
      <button>Send</button>
    </form>
  )
}
const LoginReduxForm = reduxForm({form: 'dialog'})(SendMessage);
const Dialogs = (props) => {
  
 
  let addNewMessage = (values) => {
    
    props.addMessage(values.newMessageText)
}
   return (
    <div className={c.dialogs}>
      <ul className={c["dialogs-list"]}>
        {props.users.map((user) => (
          <User name={user.name} key={user.id} id={user.id} />
        ))}
      </ul>
      <div className={c.messages}>
        {props.dialogs.map(dialog => <Message  key={dialog.id} message={dialog.message}/>)}
       <LoginReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
