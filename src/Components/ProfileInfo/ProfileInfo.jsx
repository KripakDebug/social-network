import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfilePerson from "./ProfilePerson/ProfilePerson";

const ProfileInfo = (props) => {
    return (
     <div>
        <ProfilePerson savePhoto={props.savePhoto} owner={props.owner} profile={props.profile} status={props.status} UpdateStatus={props.UpdateStatus} />
        <br />
        <MyPostsContainer />
      </div>
    )
}

export default ProfileInfo;