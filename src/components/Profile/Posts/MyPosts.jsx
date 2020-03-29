import React, {createRef} from 'react';
import b from './MyPosts.module.css'
import Post from "./Post/MyPost";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let NewPostElement = createRef();
    let addPost = () => {
        let text = NewPostElement.current.value;
        props.addPost(text)
        NewPostElement.current.value = '';
    }
    return (
        <div className={b.postsBlock}>
            <h3>My Posts </h3>
            <div>
                <div>
                    <textarea ref = {NewPostElement}></textarea>
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