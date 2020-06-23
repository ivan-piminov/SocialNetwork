import React from 'react';
import b from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img src='https://avatars.mds.yandex.net/get-pdb/2834182/818e6d4d-3877-46a5-b635-97559c0f37e0/s1200?webp=false'/>*/}
                <div className={b.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;