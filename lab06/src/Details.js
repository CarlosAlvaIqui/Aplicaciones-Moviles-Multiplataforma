import React from 'react';
import { Text, View, Button} from 'react-native';

class DetailsScreen extends React.Component {
    goProfileHandler = () => {
        this.props.navigation.navigate('Profile', {
            userName: 'Tecsupiano'
        })
    }
    render(){
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text> Details screen</Text>
          <Button 
          title= "GO GO TO HOME"
          onPress={() => this.props.navigation.navigate('Home')}
          />    
          <Button 
          title = "Ver Perfil"
          onPress={this.goProfileHandler}
          />
        </View>
      );
    }
  }

export default DetailsScreen;