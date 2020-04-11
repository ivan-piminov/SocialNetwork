const ADD_POST = "AD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
            ]
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

    // addPost() {
    //     let newPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action){
        if (action.type==="AD-POST"){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
     else if (action.type==="UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
    }
    }
};

export const addPostActionCreator =()=> ({type: ADD_POST});

export const updateNewPostActionCreator =(text)=>  ({type: UPDATE_NEW_POST_TEXT, newText: text});

window.state = store;
export default store;