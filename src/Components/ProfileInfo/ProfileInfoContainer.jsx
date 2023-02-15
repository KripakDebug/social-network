import React from "react";
import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";
import {ProfileUser, GetStatus, UpdateStatus} from "./../../redux/profile-reducer";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}



class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if(!userId){
      userId = this.props.userId;
      if(!userId){
        this.props.history.push('/login');
      }
    }
    this.props.ProfileUser(userId);
    this.props.GetStatus(userId);
  }
  render() {
    
      return (
        <ProfileInfo {...this.props} 
                    profile={this.props.profile} 
                    status={this.props.status} 
                    UpdateStatus={this.props.UpdateStatus}/>
    )
    }
}

const mapStateToProps = (state) => ({
  profile: state.profileInfoPage.profile,
  status: state.profileInfoPage.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {ProfileUser, GetStatus, UpdateStatus}),
  withRouter
)(ProfileInfoContainer)

