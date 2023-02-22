import { stopSubmit } from "redux-form";
import { AuthAPI, SecurityAPI } from "./../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA = "GET_CAPTCHA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case GET_CAPTCHA: {
      return {
        ...state,
        captcha: action.url,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

export const getCaptchaUrl = (url) => ({type: GET_CAPTCHA, url })



export const getMyLogin = () => async (dispatch) => {
  let data = await AuthAPI.GetPMyLogin();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await AuthAPI.LoginMe(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getMyLogin());
  }
   else {
    if(response.data.resultCode === 10){
          dispatch(getCaptcha())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
 let response = await AuthAPI.LogoutMe();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  
};
export const getCaptcha = () => async (dispatch) => {
 const response = await SecurityAPI.GetCaptcha();
   const captcha = response.data.url;
      dispatch(getCaptchaUrl(captcha));
    
  
};

export default authReducer;
