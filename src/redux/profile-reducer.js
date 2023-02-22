import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


const initialState = {
  messages: [
      {
        id: 1,
        message: "hi",
        like: 15
      },
      {
        id: 2,
        message: "hi brother",
        like: 12
        
      },
      {
        id: 3,
        message: "frontend??",
        like: 1
        
      },
      {
        id: 4,
        message: "yo!!!",
        like: 10
        
      },
    ],
    newPostText: '',
    profile: null,
    status: ''
}; 


const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
           let newPost = {
               id: 5,
               message: action.newPostText,
               like: 0
             };
            return{
              ...state,
              newPostText: '',
              messages: [...state.messages, newPost]
            }
        }

        case SAVE_PHOTO_SUCCESS: {
          return{
            ...state,
            profile: {...state.profile, photos: action.photos}
          };
        }
        
        case SET_USER_PROFILE: {
          return{
            ...state,
            profile: action.profile
          };
        }
        case SET_STATUS: {
          return{
            ...state,
            status: action.status
          };
        }
        case UPDATE_STATUS: {
          return{
            ...state,
            status: action.status
          };
        }
        default: 
             return state
    } 
}

export const addPostActionCreator = (newPostText) => {
    return{
        type: ADD_POST,
        newPostText
      }
    
  }
  


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })



export const setStatus = (status) => ({type: SET_STATUS, status })
export const updateStatus = (status) => ({type: UPDATE_STATUS, status })
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos })


export const ProfileUser = (userId) => async (dispatch) => {
    let data = await ProfileAPI.GetProfileUser(userId)
      dispatch(setUserProfile(data));
    
  }

export const GetStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.GetStatus(userId);
      dispatch(setStatus(response.data));
    
  }

export const UpdateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.UpdateStatus(status)
      if(response.data.resultCode === 0){
      dispatch(updateStatus(status));
      }
    
  }
export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(file)
      if(response.data.resultCode === 0){
            dispatch(savePhotoSuccess(response.data.data.photos))
      }
    
  }
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
    let response = await ProfileAPI.saveProfile(profile)
      if(response.data.resultCode === 0){
        dispatch(ProfileUser(userId));
      }else{
        dispatch(stopSubmit("changeProfile", { _error: response.data.messages[0] }));
       return Promise.reject(response.data.messages[0])
      }
    
  }

export default profileReducer;