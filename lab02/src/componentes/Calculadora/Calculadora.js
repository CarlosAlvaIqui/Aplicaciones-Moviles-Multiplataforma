import React, {Component} from 'react';

export default class Calculadora extends Component{

    render(){
       
        
        return(
            <div>
                <h1>Es es mi componente de Contador</h1>

            <div>
                <input id="valor1"></input>
                <input id="signo"></input>
                <input id="valor2"></input>
                <div>
                    <button value="1">1</button>
                    <button value="2">2</button>
                    <button value="3">3</button>
                    <button>/</button>
                </div>
                <div>
                    <button value="4">4</button>
                    <button value="5">5</button>
                    <button value="6">6</button>
                    <button>x</button>
                </div>
                <div>
                    <button value="7">7</button>
                    <button value="8">8</button>
                    <button value="9">9</button>
                    <button >--</button>
                </div>
                <div>
                    <button value="0">0</button>
                    <button>. </button>
                    <button>=</button>
                    <button>+</button>
                </div>
            </div>
            </div>
        )
    }
}