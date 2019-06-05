import React from 'react';

import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
    ToastAndroid,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Home extends React.Component {
	static navigationOptions = {
		title: 'Bienvenido a la App!',
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
		}
	};

	_showMoreApp = () => {
		this.props.navigation.navigate('Chat');
	};
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
	
	render() {
		return (
		<View>
            <Text>este es el chat</Text>
            <Button title="Muestrame El Chat" onPress={this._showMoreApp}/>
            <Button title="Mejor,Cierra la sesion :)" onPress={this._signOutAsync}/>
        </View>
		);
	}
}

