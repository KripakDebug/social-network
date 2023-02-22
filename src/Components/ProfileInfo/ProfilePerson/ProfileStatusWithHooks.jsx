import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    const activateEditMode = () => {
      if(props.owner) {
        setEditMode(true);
      }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.UpdateStatus(status);
      
    }

   const onStatusChange = (e) => {
     setStatus(e.currentTarget.value)
  }

    return (
      <div>
       <b>Status</b>: {!editMode &&  
          <div>
            <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
          </div>
        }{editMode && props.owner ? 
          <div>
            <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}  />
          </div>
        : null}
      </div>
    );
  
}

export default ProfileStatusWithHooks;
