import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class Contador extends Component {
    state = {
        valor: this.props.valor,
        valor1: 4,
        jaja: 9000
    }
    componentDidUpdate(oldProps,oldState){
        if(oldProps.valor!==this.props.valor && !isNaN(this.props.valor)){
            this.setState({
                valor: this.props.valor
            });
        }
    }
    disminuirHandler = () =>{
        this.setState({
            valor: this.state.valor - 1
        });
    }                               
    incrementarHandler = () =>{
        this.setState({
            valor: this.state.valor + 1
        });
    }
    resetHandler = () =>{
        this.setState({
            valor: this.state.valor 
        });
    }
    
    render(){
        return(
            <View>
                <Text>Mi Contador: {this.state.valor} </Text>
                <Button title='Disminuir' onPress={this.disminuirHandler} />
                <Button title='Incrementar'color="#841584" onPress={this.incrementarHandler} />
                <Button title='Resetear'color="red" onPress={this.resetHandler} />
            </View>
        );
    }
}

export default Contador;
