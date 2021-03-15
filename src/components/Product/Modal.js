import React from "react";
import { IoIosClose } from 'react-icons/io'

export const Modal = ({item, onClose}) => {

    return(
        <div className="products__modal">
            <div className="products__modal--container">
                <span className="products__modal--container-close" onClick={onClose}><IoIosClose/></span>
                <div className="products__modal--container-img">
                    <img src={item.image} alt={item.name}/>
                </div>
                <span className="products__modal--container-title"><b>Nombre: </b>{item.name}</span>
                <span className="products__modal--container-title"><b>Precio: </b>{item.price}€</span>
                <span className="products__modal--container-buton">Añadir a la cesta</span>
            </div>
        </div>
    )
}