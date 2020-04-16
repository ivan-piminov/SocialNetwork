import React, {createRef} from 'react';
import b from './MyPosts.module.css'
import Post from "./Post/MyPost";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let NewPostElement = createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange= ()=>{
        let text = NewPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props. dispatch(action);

    };
    return (
        <div className={b.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <div>
                    <textarea ref = {NewPostElement}
                   value={props.newPostText}
                    onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={b.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;