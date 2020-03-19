import React from 'react';
import b from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://img3.goodfon.com/original/9380x6016/a/97/sunbeam-landscape.jpg'/>
                <div className={b.descriptionBlock}>
                    avatar + description
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;