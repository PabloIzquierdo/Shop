
import React from 'react';
import HomeSignUp from '../components/Home/HomeSignUp';
import HomeLogIn from '../components/Home/HomeLogIn';
import * as FaIcons from 'react-icons/fa';

function Home(){

    const [logIn,setLogin] = React.useState(false);
    const [singUp,setSingUp] = React.useState(false);
    const [title, setTitle] = React.useState(true);

    const selectLogin = () => {
        setLogin(true);
        setSingUp(false);
        setTitle(false);
    }
    
    const selectSignUp = () => {
        setSingUp(true);
        setLogin(false);
        setTitle(false);
    }

    const close =  () =>{
        setSingUp(false);
        setLogin(false);
        setTitle(true);
    }

    return(
        <>
        <div className="home">
            <div className="homeContainer">
                {title ? <div className="explication">
                    <div>
                        <div className="title"> 
                            <h1>White Point</h1> 
                            <i><FaIcons.FaGlobeEurope /></i>
                        </div>
                        <div className="slogan">
                            <p>The best point of view you can find</p>
                        </div>
                    </div>
                   <div className="homeButtons">
                        <h3 onClick={selectSignUp}>Sign Up</h3>
                        <h3 onClick={selectLogin}>Login</h3>
                   </div>
                   </div> : 
                    <div className="formHome">
                        {singUp ? <HomeSignUp alt={selectLogin} close={close}/> : ""}
                        {logIn ? <HomeLogIn alt={selectSignUp} close={close}/> : ""}
                    </div>
                }
            </div>
        </div>
       
        </>
    );
}

export default Home;