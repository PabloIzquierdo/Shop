import React from "react";
import * as BaIcons from 'react-icons/bs';

export const Search = ({search, onSearch}) => {
    return(        
        <div className="products__navigation--item">
            <input id="navigation" className="products__navigation--item-input" type="text" placeholder="Busca tu marca..." value={search} onChange={onSearch} autoFocus></input>
            <i className="products__navigation--item-iconBox"><BaIcons.BsSearch className="products__navigation--item-icon" /></i>
        </div>
    )
}