import React from "react";

export const ItemMarca = ({title, icon}) => (
    <a href="#results">
        <div className="products__items--marca">
            <img className="products__items--marca-logo" src={icon} alt={title}/>
            <span className="products__items--marca-title">{title}</span>
        </div>
    </a>
);