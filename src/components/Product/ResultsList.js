import {ResultsItem} from "./ResultsItem"
import React from "react";

export const ResultsList = ({products,type,sex =""}) =>{
    const filtered = products[0].objects.filter(object => {return(object.type.includes(type) && object.sex.includes(sex))});
    
    return (filtered.map(item => 
        <ResultsItem item={item} key={item.objectId}/>
    ))
}