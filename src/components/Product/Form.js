import React from "react";

export default class NameForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeSex = this.handleChangeSex.bind(this);
    }

    handleChangeType(event){
        this.props.setType(event.target.value);
    }

    handleChangeSex(event){
        this.props.setSex(event.target.value);
    }

    render(){
        return(
            <form className="products__results--filters-form" id="result">
                <div>
                    <label>¿Qué buscas?</label>
                    <select value={this.props.type || ""} onChange={this.handleChangeType}>
                        <option value=""></option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Sudaderas">Sudaderas</option>
                        <option value="Camisas y camisetas">Camisas y camisetas</option>
                        <option value="Pantalones">Pantalones</option>
                        <option value="Zapatillas">Zapatillas</option> 
                    </select>
                </div>
                <div>
                    <label>Sexo:</label>
                    <select value={this.props.sex || ""} onChange={this.handleChangeSex}>
                        <option value=""></option>
                        <option value="Mujer">Mujer</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Unisex">Unisex</option>
                    </select>
                </div>
                
            </form>
        )
    }

}
