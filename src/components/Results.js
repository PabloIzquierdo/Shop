import React from "react";

export const Results = ({item}) => {
    return (
        <div id="results" className="products__results">
            <div className="products__results--filters">
                <p className="products__results--filters-title">{item}</p>
                <form action="#" className="products__results--filters-form">
                    <label htmlFor="type">Tipo </label>
                    <select htmlFor="type[]" className="">
                        <option> </option>
                        <option>Accesorios</option>
                        <option>Sudaderas</option>
                        <option>Camisas y camisetas</option>
                        <option>Pantalones</option>
                        <option>Zapatillas</option>
                    </select>
                    <br/>
                    <input type="submit" value="Aplicar"/>
                </form>
            </div>
        </div>
    )
};