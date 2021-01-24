import React from 'react';
import Marks from '../components/Marks.json';
import {Search} from '../components/Search';
import {ListSearched} from '../components/ListSearched';
import {Results} from '../components/Results';

const Products = () => {

    const useSemiPersistentState = () => {
        const [mark, setMark] = React.useState("");

        React.useEffect(() => {
            localStorage.setItem("search", mark);
        },[mark]);

        return [mark,setMark];
    }

    const [mark, setMark] = useSemiPersistentState();

    const searchedMark = Marks.filter(function(Mark){
        return Mark.title.toLocaleLowerCase().includes(mark.toLowerCase());
    });
    const handleSearch = even => {
        setMark(even.target.value);
    };

    const [selected, setSelected] = React.useState("");
    
    React.useEffect(() => {
        localStorage.setItem("results", selected);
    },[selected]);

    const handleSelected = even => {
        const display = document.getElementById("results");
        display.style.display = "inline-block";
        setSelected(even.target.textContent || even.target.getAttribute("alt"));
    };


    return(
        <div className="products">
            <Search onSearch={handleSearch} search={mark}/>
            <hr/>
            <ListSearched onClick={handleSelected} list={searchedMark}/>
            <hr/>
            <Results item={selected}/>
        </div>
    );
}

export default Products;