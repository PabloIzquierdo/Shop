import React from 'react';
import { ProductContext } from "./ProductContext";

export const ResultsItem = ({item}) => {
    
    const {onPopUp} = React.useContext(ProductContext);

    return(
        <div className="products__results--items" onClick={() => onPopUp(item)}>
            <img className="products__results--items-image" src={item.image} alt={item.name}/>
            <h1 className="products__results--items-title">{item.name.toUpperCase()}</h1>
            <h1 className="products__results--items-desc">{item.price}€</h1>
        </div>
        
    )
}