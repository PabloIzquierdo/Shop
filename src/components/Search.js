import React from "react";
import * as BaIcons from 'react-icons/bs';

export const Search = ({search, onSearch}) => {
    return(
        
        <div className="products__search">
                <div className="products__search--item">
                    <i className="products__search--item-iconBox"><BaIcons.BsSearch className="products__search--item-icon" /></i>
                    <input className="products__search--item-input" type="text" placeholder="Busca tu marca..." value={search} onChange={onSearch}></input>
                </div>
        </div>
    )
}