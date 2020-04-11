import React from 'react';
import b from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/2834182/818e6d4d-3877-46a5-b635-97559c0f37e0/s1200?webp=false'/>
                <div className={b.descriptionBlock}>
                    avatar + description
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;