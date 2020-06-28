import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hello! How are you?', likesCount: 20},
        {id: 2, message: 'Nice day', likesCount: 0},
        {id: 3, message: 'Go watch football!', likesCount: 15}
    ]
};

test('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("yoyo")
    // 2. action
    let newState = profileReducer(state,action);
    // 3.Expectation
    expect(newState.posts.length).toBe(4)

});

test('message of new post should be "yoyo" ', () => {
    //1. test data
    let action = addPostActionCreator("yoyo")
    // 2. action
    let newState = profileReducer(state,action);
    // 3.Expectation
    expect(newState.posts[3].message).toBe("yoyo")
});

test('after deleting length of message should be decremented  ', () => {
    //1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state,action);
    // 3.Expectation
    expect(newState.posts.length).toBe(2)
});

test('after deleting length of message should not change if id incorrect', () => {
    //1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state,action);
    // 3.Expectation
    expect(newState.posts.length).toBe(3)
});

