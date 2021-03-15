import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function HomeLogIn ({alt,close}){
    return (
        <form>
            <div className="formClose">
                <AiOutlineClose onClick={close}/>
            </div>
            <div className="inputForm">
                <label>Nombre de Usuario</label>
                <input type="text" />
            </div>
            <div className="inputForm">
                <label>Contraseña de Usuario</label>
                <input type="text" />
            </div>   
            <div className="buttonForm">
                    <button>Iniciar Sesion</button>
                    <button onClick={alt}>Sign Up</button>
            </div> 
        </form>
    );
}

export default HomeLogIn;