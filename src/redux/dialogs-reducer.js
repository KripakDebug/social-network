const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  users: [
      {
        id: 1,
        name: "Luklian",
      },
      {
        id: 2,
        name: "Oleg",
      },
      {
        id: 3,
        name: "Ruslan",
      },
      {
        id: 4,
        name: "Victor",
      },
      {
        id: 5,
        name: "Sasha",
      },
      {
        id: 6,
        name: "Zlata",
      },
    ],
dialogs: [
  {
    id: 1,
    message: "hi",
    
  },
  {
    id: 2,
    message: "hi brother",
   
  },
  {
    id: 3,
    message: "frontend??",
    
  },
  {
    id: 4,
    message: "yo!!!",
    
  },
],

};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE: {
            
              return {
                ...state,
                dialogs: [...state.dialogs, {id: 5, message: action.newMessageText}],
                
              }
              
            }
        
        default:
            return state;
    }
    


   
}

export const addMessageActionCreator = (newMessageText) => {
    return {
      type: ADD_MESSAGE,
      newMessageText
    }
  } 
  
  


export default dialogsReducer;