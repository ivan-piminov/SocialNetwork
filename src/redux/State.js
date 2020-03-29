import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hello! How are you?', likesCount: 20},
            {id: 2, message: 'Nice day', likesCount: 0},
            {id: 3, message: 'Go watch football!', likesCount: 15}
        ],
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
}


export let addPost = (postMessage) => {
    debugger
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree (state);
}
export default state;