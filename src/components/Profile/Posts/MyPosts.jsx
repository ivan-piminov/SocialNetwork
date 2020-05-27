import React, {createRef} from 'react';
import b from './MyPosts.module.css'
import Post from "./Post/MyPost";
import {reduxForm} from "redux-form";
import {Field} from "redux-form/es";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let NewPostElement = createRef();
    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    };
    // let onPostChange= ()=>{
    //     let text = NewPostElement.current.value;
    //     props.updateNeWPostText(text);
    // };

    return (
        <div className={b.postsBlock}>
            <h3>My Posts </h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={b.posts}>
                {postsElements}
            </div>
        </div>
    )
};

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name ={'newPostText'} />
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )

};
  const  AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);
export default MyPosts;