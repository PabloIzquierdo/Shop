import React from "react";
import * as BaIcons from 'react-icons/bs';

export const Search = ({search, onSearch}) => {
    return(
        
        <div className="products__search">
            <form className="products__search--form">
                <div className="products__search--item">
                    <input className="products__search--item-input" type="text" placeholder="Busca tu marca..." value={search} onChange={onSearch}></input>
                    <i className="products__search--item-iconBox"><BaIcons.BsSearch className="products__search--item-icon" /></i>
                </div>
            </form>
        </div>
    )
}