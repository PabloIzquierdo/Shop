import React, { useMemo } from 'react';
import * as FaIcons from 'react-icons/fa';
import {Search} from '../components/Product/Search';
import {ListSearched} from '../components/Product/ListSearched';
import {Results} from '../components/Product/Results';
import { ProductContext } from '../components/Product/ProductContext';
import { Modal } from '../components/Product/Modal';

const API_ENDPOINT_MARK = "http://localhost:3007/marks?_sort=title&_order=asc&q=";
const API_ENDPOINT_PRODUCT = "http://localhost:3007/marks/1/products";


const getAsyncsMarks = (search = "") => fetch(API_ENDPOINT_MARK + search)
                                .then(response => response.json())
                                .then(result => ({
                                    data: result
                                }));

const getAsyncsProducts = () => fetch(API_ENDPOINT_PRODUCT)
                                    .then(response => response.json())
                                    .then(result => ({
                                        data: result
                                    }))
const Products = () => {
    
    const [marks, setMarks] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [selectedMark, setSelectedMark] = React.useState("");
    
    const [searchMark, setSearchMark] = React.useState("");
    
    const [isLoadingMarks, setIsLoadingMarks] = React.useState(false);
    const [isLoadingProducts, setIsLoadingProducts] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    
    const [isSelected,setIsSelected] = React.useState(false);

    const [productsMark, setProductsMark] = React.useState("");

    const [productModal,setProductModal] = React.useState();
    const [isModal,setIsModal] = React.useState(false);
    
    
    function loadMarks(){
        setIsError(false);
        setIsLoadingMarks(true);
        getAsyncsMarks(searchMark).then(result => {
            setIsLoadingMarks(false);
            setMarks(result.data);
        }).catch(_ => {
            setIsError(true);
        });
    }

    function loadProducts(){
        getAsyncsProducts().then(result => {
            setIsLoadingProducts(false);
            setProducts(result.data);
        }).catch(_ => {
            setIsError(true);
        });
    }

    React.useEffect(loadMarks, [searchMark]); 
    React.useEffect(loadProducts, []); 

    
    const handleSearch = event => {
        setSearchMark(event.target.value);
        loadMarks();
    };
    
    const handleSelected = even => {
        setSelectedMark(even.target.textContent || even.target.getAttribute("alt"));
        setIsSelected(true);
    };

    const handlePopUp = item => {
        setProductModal(item);
        setIsModal(true);
    }

    const handleClose = () => setIsModal(false);

    useMemo(() => {
        setProductsMark(products.filter(product => (product.title.includes(selectedMark))))
    },[selectedMark,products])
    
        return(
            <div className="products">
                <div className="products__navigation">
                    <Search onSearch={handleSearch} search={searchMark}/>
                </div>
                <div className="products__items">
                    {isError &&
                            <i className="reload" onClick={function (){
                                window.location.reload();
                            }
                            }>
                                <FaIcons.FaUndo/>
                            </i>
                    }
                    {isLoadingMarks ?
                        <h1 className="reload">Loading...</h1>
                    :   <ListSearched onClick={handleSelected} list={marks}/>
                    }
                </div>
                    {isSelected ? 
                        isLoadingProducts ?
                            <h1>Loading...</h1>
                        :   <div id="results" className="products__results">
                        <ProductContext.Provider value={{
                            onPopUp : handlePopUp
                        }}>
                            <Results list={productsMark} mark={selectedMark}/>
                        </ProductContext.Provider>
                        </div>
                    : <h1 className="products__results-title">Elige una marca</h1>}
                    
                    {isModal ? <Modal item={productModal} onClose={handleClose}/>
                    : null}
            </div>
    );

}

export default Products;