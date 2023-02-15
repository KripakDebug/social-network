import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import {getFriends} from './../../../redux/navigation-reducer'
import Friends from "./Friends";

const FriendsContainer = (props) => {
    
    useEffect(() => {
        props.getFriends();
    }, [])
   
        return <Friends friend={props.friend}/>
    
}
const mapStateToProps = (state) => ({
        friend: state.navigationPage.friend
})



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getFriends})
)(FriendsContainer)