import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hello! How are you?', likesCount: 20},
                {id: 2, message: 'Nice day', likesCount: 0},
                {id: 3, message: 'Go watch football!', likesCount: 15}
            ],
            newPostText: " "
        },
        dialogsPage: {

            messages: [
                {id: 1, message: 'HI'},
                {id: 2, message: 'What you think about thi music?'},
                {id: 3, message: 'bye-bye'}
            ],
            dialogs: [
                {id: 1, name: 'Olga'},
                {id: 2, name: 'Anton'},
                {id: 3, name: 'Vadim'},
                {id: 4, name: 'Andrey'}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    }
};

window.state = store;
// export default store;