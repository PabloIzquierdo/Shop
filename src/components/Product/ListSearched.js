import React from "react";
import {ItemMarca} from './ItemMarca';

export const ListSearched = ({list, onClick}) => list.map(item => 
    <div className="products__items--list" onClick={onClick} key={item.id}>
        <ItemMarca  {...item} />
    </div>
);