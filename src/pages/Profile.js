import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

function Profile(){
    return(
        <div className="profile">
            <div className="profile_user">
                <div className="user-img"><FaIcons.FaUserCircle /></div>
                <div className="user-data">
                    <p>Nombre</p>
                    <p>Datos</p>
                </div>
            </div>
            <div className="profile_help">
                <div className="help-icons"><FaIcons.FaCartArrowDown /></div>
                <div className="help-icons"><BiIcons.BiSupport /></div>
                <div className="help-icons"><RiIcons.RiFilePaperLine /></div>
            </div>
        </div>
    );
}

export default Profile;