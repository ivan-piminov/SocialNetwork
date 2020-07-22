import React, {useEffect, useState} from 'react';
import b from "../Profile/ProfileInfo/ProfileInfo.module.css";


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(()=> {
        setStatus(props.status);
    }, [props.status]
    );


    const activateEditMode = () => {
        setEditMode(true)
    };

    const deActivateEditMode = () => {
        setEditMode(false);
         props.updateStatus(status)
    };

    const  onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={b.profileData}>
            {!editMode &&
            <div>
              <b>Status: </b>  <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input type="text" onBlur={deActivateEditMode} autoFocus={true} onChange={onStatusChange} value={status} />
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;
