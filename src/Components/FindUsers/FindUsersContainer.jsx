import React from "react";
import { connect } from "react-redux";
import { requestUsers, Follow, Unfollow } from "../../redux/users-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingIsProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";
import { withAuthRedirect } from "../hoc/AuthRedirect";


class FindUsersContainer extends React.Component {

  componentDidMount() {
   this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
   this.props.requestUsers(pageNumber, this.props.pageSize)
  }
    render () {
     
      return <>
         {this.props.isFetching ?  <Preloader/> : null}
         <FindUsers 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
        selectedPage={this.props.selectedPage}
        onPageChanged={this.onPageChanged}
        followingIsProgress={this.props.followingIsProgress}
        getUsers={this.props.getUsers}
        Follow={this.props.Follow}
        Unfollow={this.props.Unfollow}
      />
      
      
      </>
    }
}

const mapStateToProps = (state) => {
    return {
        // users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state),
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {requestUsers, Follow, Unfollow})
  )(FindUsersContainer)