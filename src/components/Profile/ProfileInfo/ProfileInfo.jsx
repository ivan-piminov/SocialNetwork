import React from 'react';
import b from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };
    return (
        <div>
            <div>
                {/*<img src='https://avatars.mds.yandex.net/get-pdb/2834182/818e6d4d-3877-46a5-b635-97559c0f37e0/s1200?webp=false'/>*/}
                <div className={b.descriptionBlock}>
                    <img src={profile.photos.large || userPhoto} className={b.mainPhoto}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;