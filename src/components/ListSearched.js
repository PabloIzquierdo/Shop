import React from "react";
import {ItemMarca} from './ItemMarca';

export const ListSearched = ({onClick, list}) => list.map(item => 
<div className="products__list" onClick={onClick} key={item.title}>
    <ItemMarca  {...item} />
</div>
);