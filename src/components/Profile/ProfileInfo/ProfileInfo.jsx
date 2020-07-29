import React, {useState} from 'react';
import b from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import headerPhoto from '../../../assets/images/Фон.jpg'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [isHiddenChangePhoto,setChangePhotoInput]= useState(true);

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
            setChangePhotoInput(true)
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
                <div>
                    <img alt='headerImg' src={headerPhoto} className={b.themePhoto}/>
                </div>
                <img alt='profileImg' src={profile.photos.large || userPhoto} className={b.mainPhoto}/>

                <div><button className={b.profDataFormButton} onBlur={()=>setChangePhotoInput(true)} onClick={()=>setChangePhotoInput(false)}>change photo</button></div>

                {isOwner && isHiddenChangePhoto===false && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>


                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} className={b.profileData}/>}

            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={b.profileData}>
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
            {isOwner && <div>
                <button className={b.profDataFormButton} onClick={goToEditMode}>edit profile</button>
            </div>}
        </div>
    )

};


const Contacts = ({contactsTitle, contactsValue}) => {
    return <div className={b.contact}><b>{contactsTitle}:</b>{contactsValue}</div>

};
export default ProfileInfo;