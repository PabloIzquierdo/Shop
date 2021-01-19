import React from 'react';
import * as TiIcons from 'react-icons/ti';

function Team(){
    return(
        <div className="team">
            <div className="team__container">
                <div className="team__container--data">
                   <ul>
                       <li>Email : whitePoint@gmail.com</li>
                       <li>Instagram : @whitePoint</li>
                       <li>Facebook : whitePoint</li>
                   </ul>
                </div>
                <div className="team__container--icons">
                    <TiIcons.TiSocialTwitter className="team__container--icons-1"/>
                    <TiIcons.TiSocialInstagram className="team__container--icons-1"/>
                    <TiIcons.TiSocialFacebookCircular className="team__container--icons-1"/>
                    <TiIcons.TiSocialYoutube className="team__container--icons-2"/>
                    <TiIcons.TiSocialPinterest className="team__container--icons-2"/>
                </div>
            </div>
        </div>
    );
}

export default Team;