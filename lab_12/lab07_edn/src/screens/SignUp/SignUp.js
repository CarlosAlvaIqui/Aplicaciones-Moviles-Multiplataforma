/*
import React from 'react';
import { View, Button, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignInScreen extends React.Component{
    static navigationOptions = {
        title: 'Registrarse',
        tabBarIcon:({ focused, horizontal, tintColor})=> {
            return <Ionicons name="ios-clipboard" size={25} color={tintColor} />
        }
    };
    _signInAsync = async() => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    render(){
        return(
            <View>
                <Button title="Inicie Sesion!" onPress={this._signInAsync}/>
            </View>
            )
    }
}*/

import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity,ToastAndroid,KeyboardAvoidingView,Button,TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-ionicons';
import axios from '../../lib/axios';
import imageBackground from '../../assets/img/background-login.jpg';
import { Fumi, Hoshi } from 'react-native-textinput-effects';

export default class SignInScreen extends React.Component{
    static navigationOptions = {
        title: 'Registrarse',
        tabBarIcon: ({ focused, horizontal, tintColor}) => {
            return <Ionicons name="ios-contact" size={25} color={tintColor} />;
        }
    };
    state= {
        user: '',
        password: '',
        loading: false,
        showPassword: false
    };
    showPassword = () => {
            this.setState({ showPassword: !this.state.showPassword });
    };
    inputHandler = (field, value) => {
        this.setState({ [field]: value});
    };
    onSubmitHandler = () => {
        if (this.state.user === 'gaa' || this.state.password === 'gaa') {
            return ToastAndroid.showWithGravity(
                'Falta ingresar datos!',
                ToastAndroid.SHORT,
                ToastAndroid.TOP
            );
        }
        this.setState({ loading: true });
        axios({
            method: 'POST',
            url: 'api/user/signin',
            data: {
                username: this.state.user,
                password: this.state.password
            }
        })
        .then(async response => {
            ToastAndroid.showWithGravity(
                response.data.message,
                ToastAndroid.LONG,
                ToastAndroid.TOP
            );
            await AsyncStorage.setItem('userToken', response.data.token);
            this.props.navigation.navigate('App');
        })
        .catch(err => {
            ToastAndroid.showWithGravity(
                'Hubo un error en el registro',
                ToastAndroid.LONG,
                ToastAndroid.TOP
            );
            console.warn(err);
            this.setState({ loading: false});
        });
    };
/*
    _singInAsync = async () =>{
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };*/
    _signInAsync = async() => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    registerHandler = () => {
            this.props.navigation.navigate('SignUp');
    };
    render(){
        return(
           <View style={{ flex: 1}}>
              <ImageBackground 
                source={imageBackground}
                style={{ width: '100%', height: '100%'}}
              >
              <KeyboardAvoidingView
                behavior="position"
                style={{ justifyContent: 'center' }}
                enabled
              >
                <Text
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 48,
                    color: '#fff'
                }}
                >Tecsup Videos</Text>
                   <View>
                        <Fumi style={{
                            backgroundColor: '#46494f',
                            opacity: 0.8,
                            marginBottom: 10
                            }}
                            label={'Usuario'}
                            iconClass={Icon}
                            keyboardType="email-address"
                            onChangeText={text => this.inputHandler('user', text)}
                            value={this.state.user}
                            iconName={'person'}
                            iconColor={'#fff'}
                            labelStyle={{color: 'white'}}
                            iconSize={30}
                            iconWidth={40}
                            inputPadding={16}
                        />
                   </View>
                   <View>
                        <Fumi style={{
                            backgroundColor: '#46494f',
                            opacity: 0.8,
                            marginBottom: 10
                            }}
                            label={'Email'}
                            iconClass={Icon}
                            keyboardType="email-address"
                            onChangeText={text => this.inputHandler('user', text)}
                            value={this.state.user}
                            iconName={'email'}
                            iconColor={'#fff'}
                            labelStyle={{color: 'white'}}
                            iconSize={30}
                            iconWidth={40}
                            inputPadding={16}
                        />
                   </View>
                   <View style={{ flexDirection: 'row' }}>
                        <Fumi style={{
                            width: '82%',
                            backgroundColor: '#46494f',
                            opacity: 0.8
                            }}
                            label={'Contraseña'}
                            labelStyle={{color: 'white'}}
                            onChangeText={text => this.inputHandler('password', text)}
                            secureTextEntry={!this.state.showPassword}
                            value={this.state.password}
                            iconClass={Icon}
                            iconName={'key'}
                            iconColor={'#fff'}
                            iconSize={30}
                            iconWidth={40}
                            inputPadding={16}
                        />
                        <Icon 
                            color= '#fff'
                            style={{
                                padding: 20,
                                alignItems: 'center',
                                backgroundColor: '#ffa138',
                                opacity: 0.8,
                                height: 65
                            }}
                            size={25}
                            name={this.state.showPassword ? 'md-eye' : 'md-eye-off'}
                            onPress={this.showPassword}
                        />
                   </View>
                   <View style={{ flexDirection: 'row' }}>
                        <Fumi style={{
                            width: '82%',
                            backgroundColor: '#46494f',
                            opacity: 0.8
                            }}
                            label={'Contraseña'}
                            labelStyle={{color: 'white'}}
                            onChangeText={text => this.inputHandler('password', text)}
                            secureTextEntry={!this.state.showPassword}
                            value={this.state.password}
                            iconClass={Icon}
                            iconName={'key'}
                            iconColor={'#fff'}
                            iconSize={30}
                            iconWidth={40}
                            inputPadding={16}
                        />
                        <Icon 
                            color= '#fff'
                            style={{
                                padding: 20,
                                alignItems: 'center',
                                backgroundColor: '#ffa138',
                                opacity: 0.8,
                                height: 65
                            }}
                            size={25}
                            name={this.state.showPassword ? 'md-eye' : 'md-eye-off'}
                            onPress={this.showPassword}
                        />
                   </View>
                   <TouchableOpacity onPress={this.onSubmitHandler}
                       style={{
                           marginTop: 20,
                           padding: 15,
                           justyfyContent: 'center',
                           alignItems: 'center',
                           borderRadius: 25,
                           backgroundColor: '#dcdcdc'
                           }}>
                       <Text style={{
                           color: '#46494f',
                           fontSize: 15,
                           fontWeight: 'bold'
                       }}>
                            Inicia Sesion
                       </Text>
                   </TouchableOpacity>
                   <View
                    style={{
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf:'center'
                    }}
                   >
                    <Text style={{ color: '#fff', fontSize: 14}}>
                        ENTRE AL CHAT AQUI!!!!!
                        <Text 
                            onPress={this._signInAsync}
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}>
                            {' '}
                            Chat!!!!
                        </Text>
                    </Text>
                   </View>
                   </KeyboardAvoidingView>
              </ImageBackground>
            </View>
            );
    }
}