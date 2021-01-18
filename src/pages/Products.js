import React from 'react';
import marcas from '../components/marcas.json';
import {Search} from '../components/Search';
import {ListSearched} from '../components/ListSearched';
import {Results} from '../components/Results';

const Products = () => {

    const initialSearch = "" ;

    const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem("search") || initialSearch);

    React.useEffect(() => {
        localStorage.setItem("search", searchTerm);
    },[searchTerm]);

    const handleSearch = even => {
        setSearchTerm(even.target.value);
    };

    const [selected, setSelected] = React.useState(localStorage.getItem("results") || "");

    React.useEffect(() => {
        localStorage.setItem("results", selected);
    },[selected]);

    const handleSelected = even => {
        const display = document.getElementById("results");
        display.style.display = "inline-block";
        setSelected(even.target.textContent || even.target.getAttribute("alt"));
    };

    const searchedMarcas = marcas.filter(function(marca){
        return marca.title.toLocaleLowerCase().includes(searchTerm.toLowerCase());
    });

    return(
        <div className="products">
            <Search onSearch={handleSearch} search={searchTerm}/>
            <hr/>
            <ListSearched onClick={handleSelected} list={searchedMarcas}/>
            <hr/>
            <Results item={selected} onLoad={localStorage.setItem("results","")}/>
        </div>
    );
}

export default Products;