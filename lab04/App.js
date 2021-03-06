/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Contalagil from './src/components/Contador';
import Contador from './src/components/Contador';



export default class App extends Component {
  state = {
    valorInicial: '0'
  }
  iniciarContadoresHandler = (texto) => {
    this.setState({
      valorInicial: texto
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Nuestro primer componente2 bien echo carlos!</Text>
        <TextInput 
          value={this.state.valorInicial}
          onChangeText={this.iniciarContadoresHandler}
        />
        {!isNaN(this.state.valorInicial)?(<View>
          <Contador valor={parseInt(this.state.valorInicial)}/>
          <Contador valor={parseInt(this.state.valorInicial)+1}/>
          <Contador valor={parseInt(this.state.valorInicial)+2}/>
        </View>):(<Text>Debe Ingresar un NUmero!</Text>)}
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
