import React from "react";
import NameForm from "./Form";
import {ResultsList} from "./ResultsList";

export const Results = ({list,mark}) => {
    
    const [type,setType] = React.useState("");
    const [sex,setSex] = React.useState("");
    
    return (
        <>
        <div className="products__results--filters">
            <p className="products__results--filters-title">{mark}</p>
            <NameForm type={type} setType={setType} sex={sex} setSex={setSex}/>
        </div>
        <div className="products__results--list">
            <ResultsList products={list} type={type} sex={sex}/>
        </div>
        </>
    )
};