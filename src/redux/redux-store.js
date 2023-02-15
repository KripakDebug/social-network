import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navigationReducer from './navigation-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";




let reducerBatch = combineReducers({
    profileInfoPage: profileReducer,
    dialogsPage:  dialogsReducer,
    navigationPage: navigationReducer,
    findUsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducerBatch, composeEnhancers(applyMiddleware(thunkMiddleware)));



export default Store;