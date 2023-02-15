import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfilePerson from "./ProfilePerson/ProfilePerson";

const ProfileInfo = (props) => {
    return (
     <div>
        <ProfilePerson profile={props.profile} status={props.status} UpdateStatus={props.UpdateStatus} />
        <MyPostsContainer />
      </div>
    )
}

export default ProfileInfo;