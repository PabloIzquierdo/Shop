
import React from 'react';
import * as FaIcons from 'react-icons/fa';


function Home(){
    return(
        <div className="home">
            <div className="home__explication">
                <h1 className="home__explication-title">White Point</h1> 
                <i className="home__explication-icon"><FaIcons.FaGlobeEurope /></i><br/> 
                <p className="home__explication-subtitle">The best point of view you can find</p>
            </div>
            <div className="home__container">
                <h3 className="home__container-button">Sign Up</h3>
                <h3 className="home__container-button">Login</h3>
            </div>
        </div>
    );
}

export default Home;