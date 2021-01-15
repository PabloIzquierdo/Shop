import React from 'react';
import marcas from '../components/marcas.json';
import {Search} from '../components/Search';
import {ListSearched} from '../components/ListSearched';

const Products = () => {

    const initialSearch = "" ;

    const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem("search") || initialSearch);

    React.useEffect(() => {
        localStorage.setItem("search", searchTerm);
    },[searchTerm]);

    const handleSearch = even => {
        setSearchTerm(even.target.value);
    };

    const setSelected = "";

    const handleSelected = even => {
        const selected = document.getElementById("products");
        selected.style.display = "inline-block";
        console.log(even.target.textContent);
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
            <div id="products">
                <h1>ELEMENTS</h1>
            </div>
        </div>
    );
}

export default Products;