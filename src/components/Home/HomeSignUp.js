import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function HomeSignUp ({alt,close}) {

       return(
              <div id="formSignUp">
              <form >
                     <div className="formClose">
                            <i><AiOutlineClose onClick={close}/></i>
                     </div>
                     <div className="inputForm">
                            <label>Nombre de Usuario</label>
                            <input type="text" />
                     </div>
                     <div className="inputForm">
                            <label>Correo electronico</label>
                            <input type="text" />
                     </div>
                     <div className="inputForm">
                            <label>Nueva contraseña</label>
                            <input type="text" />
                     </div>
                     <div className="inputForm">
                            <label>Repetir contraseña</label>
                            <input type="text" />
                     </div>
                     <div className="buttonForm">
                            <button>Registrarse</button>
                            <button onClick={alt}>LogIn</button>
                     </div>
              </form>
              </div>
       );
}

export default HomeSignUp;