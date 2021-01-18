import React from "react";

export const ItemMarca = ({title, icon}) => (
    <div className="products__list--marca">
        <img className="products__list--marca-logo" src={icon} alt={title}/>
        <span className="products__list--marca-title">{title}</span>
    </div>
);