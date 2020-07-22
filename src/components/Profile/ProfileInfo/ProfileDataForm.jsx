import React from "react";
import b from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={b.profileData}>
            {error && <div className={b.formSummaryError}>
                {error}
            </div>}

            <div className={b.descriptionBlock}>
                <div>
                    <b>Full name: </b>{createField('Full name', 'fullName', [], Input)}
                </div>
                <div>
                    <b>Looking for a job: </b>{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>

                <div>
                    <b>My professional
                        skills: </b>{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>
                }
                <div>
                    <b>About me: </b>{createField('About me', 'aboutMe', [], Textarea)}
                </div>
                <div>
                    <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={b.contact}>
                            <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b></div>
                    }
                )}
                </div>
            </div>
            <div>
                <button className={b.profDataFormButton}>save</button>
            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm