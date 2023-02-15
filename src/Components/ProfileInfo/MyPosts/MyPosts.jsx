import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Element} from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  const Textarea = Element('textarea');
  return (
    <form onSubmit={props.handleSubmit}>
        <Field className={classes.message} name={'newPostText'} component={Textarea} validate={[required, maxLength10]}/>
       
        <button className={classes['send-message']}>Відправити</button>
      </form>
  )
}

const AddPostFormRedux = reduxForm({form: 'postMessage'})(AddPostForm)

const MyPosts = (props) => {

 console.log('Render');
   
    let addNewMessage = (values) => {
    
      props.addPost(values.newPostText)
  }
  
    return (
      <div className={classes.comments}>
          <h1>Коментарі</h1>
          <AddPostFormRedux onSubmit={addNewMessage} />
          {props.messages.map(message => <Post message={message.message} key={message.id} like={message.like}/>)}
      </div>
    );
  
};



export default MyPosts;
