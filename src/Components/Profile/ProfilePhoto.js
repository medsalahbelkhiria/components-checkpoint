import React from 'react';
import './ProfilePhoto.css';
import ProfilePicture from "../../Images/me.png";

function ProfilePhoto() {
    return (
        <div>
            <img src={ProfilePicture} alt="Profile Pic"/>
        </div>
    )
}

export default ProfilePhoto
