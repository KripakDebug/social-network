import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';
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

export default profileReducer;