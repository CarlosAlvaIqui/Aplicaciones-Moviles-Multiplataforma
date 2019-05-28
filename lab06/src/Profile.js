import React from 'react';
import { Text, View, Button} from 'react-native';

 class ProfileScreen extends React.Component{
  render() {
      let userNmae = 'Usuario';
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text>Bienvenidoo!</Text>
          <Button
          title= "Volver al home"
          onPress={() => this.props.navigation.navigate('Home')}
          />
      </View>
    );
  }
}

export default ProfileScreen;