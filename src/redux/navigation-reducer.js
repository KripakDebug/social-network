import { UsersAPI } from "../api/api";

const SET_FRIEND = 'SET-FRIEND'


const initialState = {
    friend: [
     
    ] 
  };


const navigationReducer = (state = initialState, action) => {
    switch(action.type) {
      case SET_FRIEND: { 
            return {
              ...state,
              friend: [...action.friend]
        
          }      
      }
      default: 
        return state
      
    }
}
export const setFriends = (friend) => ({type: SET_FRIEND, friend})

export const getFriends = () => async (dispatch) => {
    let data = await UsersAPI.GetFriends();     
        dispatch(setFriends(data.items))
                         
  }

export default  navigationReducer;