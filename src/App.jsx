import React, {Suspense } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import News from "./Components/News/News";
import Musica from "./Components/Musica/Musica";
import Settings from "./Components/Settings/Settings";
import {initializeApp} from './redux/app-reducer'
import { connect, Provider } from "react-redux";
import store from "./redux/redux-store";
import { compose } from "redux";
import Preloader from "./Components/common/Preloader/Preloader";
import { withRouter } from "./Components/ProfileInfo/ProfileInfoContainer";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileInfoContainer = React.lazy(() => import('./Components/ProfileInfo/ProfileInfoContainer'));
const FindUsersContainer = React.lazy(() => import('./Components/FindUsers/FindUsersContainer'));
const Login = React.lazy(() => import('./Components/Login/Login'));
const HeaderContainer = React.lazy(() => import('./Components/Header/HeaderContainer'));


class App extends React.Component {



  componentDidMount() {
    this.props.initializeApp()
   }

  render() {
     return (
      
        <div className="wrapper">
          <HeaderContainer />
          <Navigation  />
          <div className="wrapper-content">
            <Suspense fallback={<Preloader/>}>
              <Routes>
                <Route path="/profile/:userId"  element={<ProfileInfoContainer  />} />
                <Route path="/profile"  element={<ProfileInfoContainer  />} />
                <Route path="/messages/*" element={<DialogsContainer  />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Musica />} />
                <Route path="/users" element={<FindUsersContainer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </div>
        </div>
     
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
 return <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Provider store={store}>
          <AppContainer  />
        </Provider>
      </BrowserRouter>
}

export default SamuraiJSApp;