import { connect } from "react-redux";
import { compose } from "redux";
import {addMessageActionCreator} from '../../redux/dialogs-reducer';
import { withAuthRedirect } from "../hoc/AuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    newMessageText: state.dialogsPage.newMessageText,
    users: state.dialogsPage.users,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText));
    }
  }
}


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)


