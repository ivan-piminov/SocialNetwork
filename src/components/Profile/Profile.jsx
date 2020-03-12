import React from 'react';
import b from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";

const Profile = () => {
    return (
        <div>
        <div>
            <img src='https://img3.goodfon.com/original/9380x6016/a/97/sunbeam-landscape.jpg'/>
            <div>
                avatar + description
        </div>
            <MyPosts/>
        </div>
        </div>
)
}
export default Profile;