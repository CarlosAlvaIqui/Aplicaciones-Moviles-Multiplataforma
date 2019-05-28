import React from 'react';
import { Text, View, Button} from 'react-native';

 class HomeScreen extends React.Component{
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text>Hola mundoo!</Text>
          <Button
          title= "GO GO TO DETAILS"
          onPress={() => this.props.navigation.navigate('Details')}
          />
      </View>
    );
  }
}

export default HomeScreen;