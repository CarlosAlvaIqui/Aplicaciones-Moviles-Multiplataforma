import React, {Component} from 'react';

export default class Contador extends Component{

    state = {
        cont: this.props.valor
    }
    disminuirHandler = () =>{
        this.setState({
            cont: this.state.cont - 1
        });
    }
    aumentarHandler = () =>{
        this.setState({
            cont: this.state.cont + 1
        });
    }
    resetHandler = () =>{
        this.setState({
            cont: this.state.valor 
        });
    }
    render(){
        let advertencia = (<p>Iniciamos con un numero mayor a 5!</p>)
        if(this.props.valor<=5) advertencia = null;
        return(
            <div>
                <h1>Es es mi componente de Contador</h1>
                <p>Este contador iniciara en {this.props.valor}</p>
            {advertencia}
            <p>Numeros actual: {this.state.cont}</p> 	
            <button onClick={this.disminuirHandler}>Disminuir</button>
            <button onClick={this.resetHandler}>Resetear</button>
            <button onClick={this.aumentarHandler}>Aumentar</button>
            </div>
        )
    }
}