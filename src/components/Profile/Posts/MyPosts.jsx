import React from 'react';
import b from './MyPosts.module.css'
import Post from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div className={b.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={b.posts}>
                <Post message="Hello! How are you?" likesCount='20'/>
                <Post message="Nice day!" likesCount='0'/>
                <Post message="Go watch football!" likesCount='15'/>
            </div>
        </div>
    )
}
export default MyPosts;