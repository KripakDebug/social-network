import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navigationReducer from './navigation-reducer';
let store = {
  _state: {
    dialogsPage: {
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
      dialogText: ''
    },

    profileInfoPage: {
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
          newPostText: ''
    },

    navigationPage: {
      friend: [
        {
          name: 'Vitaliy',
          id: 1
        },
        {
          name: 'Sveta',
          id: 2
        },
        {
          name: 'Anatoliy',
          id: 3
        },
        {
          name: 'Oleg',
          id: 4
        },
      ] 
    }

  },
  _callSubscriber() {
    console.log('ggf');
  },


  getState() {
    return this._state;
  },
  subscribe(observer)   {
    this._callSubscriber = observer;
  },

dispatch(action) {
  this._state.ProfileInfoPage = profileReducer(this._state.ProfileInfoPage, action)
  this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
  this._state.NavigationPage = navigationReducer(this._state.NavigationPage, action)
  this._callSubscriber(this._state);
}
}




  export default store;