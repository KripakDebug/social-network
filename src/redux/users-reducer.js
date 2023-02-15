import { UsersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { getFriends } from "./navigation-reducer";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_COUNT_USERS = 'TOTAL-COUNT-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IS_FETCHING = 'TOGGLE-FOLLOWING-IS-FETCHING';


const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
  isFetching: false,
  followingIsProgress: []
}; 


const usersReducer = (state = initialState, action) => {

    switch(action.type) {
       case FOLLOW: {
          return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
          }

       }
       case UNFOLLOW: {
        return {
          ...state,
          users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
          
        }
       }
       case SET_USERS: {
          return {...state, users: action.users}
       }
       case SET_CURRENT_PAGE: {
          return {...state, currentPage: action.currentPage}
       }
       case TOTAL_COUNT_USERS: {
          return {...state, totalUsersCount: action.totalCount}
       }
       case TOGGLE_IS_FETCHING: {
          return {...state, isFetching: action.isFetching}
       }
       case TOGGLE_FOLLOWING_IS_FETCHING: {
        return {
          ...state, 
          followingIsProgress: action.isFollowingProgressFetching 
          ? [...state.followingIsProgress, action.userId]
          : state.followingIsProgress.filter(id => id !== action.userId)
        }
       }
        default: 
             return state
    } 
}

export const follow = (userId) => ({type: FOLLOW,userId})
  
export const unFollow = (userId)  => ({type: UNFOLLOW,userId})

export const setUsers = (users)  => ({type: SET_USERS,users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalCountUsers = (totalCount) => ({type: TOTAL_COUNT_USERS, totalCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFollowingProgressFetching, userId) => ({type: TOGGLE_FOLLOWING_IS_FETCHING, isFollowingProgressFetching, userId })

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
    
 let data = await UsersAPI.getUsers(currentPage,pageSize)
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCountUsers(data.totalCount));
  }

  const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId) );
   let data = await apiMethod(userId)
      if( data.resultCode === 0){      
        dispatch(actionCreator(userId)  )  
        dispatch(getFriends())

      }
      dispatch(toggleIsFollowingProgress(false, userId) )
  }


export const Follow = (userId) => async (dispatch) => {
      followUnfollowFlow(dispatch, userId, UsersAPI.Follow.bind(UsersAPI), follow );
  }

export const Unfollow = (userId) => async (dispatch) => {
      followUnfollowFlow(dispatch, userId, UsersAPI.Unfollow.bind(UsersAPI), unFollow );
}
export default usersReducer;