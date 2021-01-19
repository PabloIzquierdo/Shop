import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

function Profile(){
    return(
        <div className="profile">
            <div className="profile__user">
                <div className="profile__user--img"><FaIcons.FaUserCircle /></div>
                <div className="profile__user--data">
                    <h1 className="profile__user--data-value">Nombre</h1>
                    <h1 className="profile__user--data-value">Datos</h1>
                </div>
            </div>
            <div className="profile__help">
                <div className="profile__help-icons"><FaIcons.FaCartArrowDown /></div>
                <div className="profile__help-icons"><BiIcons.BiSupport /></div>
                <div className="profile__help-icons"><RiIcons.RiFilePaperLine /></div>
                <div className="profile__help-icons"><FaIcons.FaCartArrowDown /></div>
                <div className="profile__help-icons"><BiIcons.BiSupport /></div>
                <div className="profile__help-icons"><RiIcons.RiFilePaperLine /></div>
            </div>
        </div>
    );
}

export default Profile;