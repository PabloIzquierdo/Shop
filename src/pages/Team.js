import React from 'react';
import * as TiIcons from 'react-icons/ti';

function Team(){
    return(
        <div className="team">
            <div className="teamContainer">
                <div className="teamDataContainer">
                   <ul>
                       <li>Email : whitePoint@gmail.com</li>
                       <li>Instagram : @whitePoint</li>
                       <li>Facebook : whitePoint</li>
                   </ul>
                </div>
                <div className="teamIconsContainer">
                    <TiIcons.TiSocialTwitter id="twitter"/>
                    <TiIcons.TiSocialInstagram id="instagram"/>
                    <TiIcons.TiSocialFacebookCircular id="facebook"/>
                    <TiIcons.TiSocialYoutube id="youtube"/>
                    <TiIcons.TiSocialPinterest id="pinterest"/>
                </div>
            </div>
        </div>
    );
}

export default Team;