import React from 'react';
import b from './MyPosts.module.css'
import Post from "./Post/MyPost";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New Post
            </div>
            <div className={b.posts}>
                <Post message = "Hello! How are you?" likesCount='20'/>
                <Post message = "Nice day!" likesCount='0'/>
                <Post message = "Go watch football!" likesCount='15' />
            </div>
        </div>
    )
}
export default MyPosts;