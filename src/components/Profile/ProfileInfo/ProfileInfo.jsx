import React, {useState} from 'react';
import b from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            })
    };

    return (
        <div>
            <div>
                {/*<img src='https://avatars.mds.yandex.net/get-pdb/2834182/818e6d4d-3877-46a5-b635-97559c0f37e0/s1200?webp=false'/>*/}
                <img src={profile.photos.large || userPhoto} className={b.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}

            <div className={b.descriptionBlock}>
                <div>
                    <b>Full name: </b>{profile.fullName}
                </div>
                <div>
                    <b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                {profile.lookingForAJob &&
                <div>
                    <b>My professional skills: </b>{profile.lookingForAJobDescription}
                </div>}
                <div>
                    <b>About me: </b>{profile.aboutMe}
                </div>
                <div>
                    <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                        return <Contacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]}/>
                    }
                )}
                </div>
            </div>
        </>
    )

};


const Contacts = ({contactsTitle, contactsValue}) => {
    return <div className={b.contact}><b>{contactsTitle}:</b>{contactsValue}</div>

};
export default ProfileInfo;