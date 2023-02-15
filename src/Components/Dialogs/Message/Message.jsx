import React from "react";
import c from './../Dialogs.module.css'

const Message = ({ message}) => {
    return (
      <div className={c["message-wrapper"]}>
        <div className={c.message}>{message}</div>
      </div>
    );
  };

  export default Message;