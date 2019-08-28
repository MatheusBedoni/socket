import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View
} from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';

export default class App extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      switchOn1: false,
      switchOn2: false,
      switchOn4: false,
      url: 'ddfdfd'
    };
  }

  getConnection(){
    var connection = new WebSocket('ws://'+this.state.url);

     // When the connection is open, send some data to the server
    connection.onopen = function () {
    connection.send('L0.1'); // Send the message 'Ping' to the server
     console.log(intervalo);

     if (connection.readyState === WebSocket.OPEN) {
      connection.close();
     }
   };

  }
  
  getButtonText() {
    return this.state.switchOn4 ? 'On' : 'Off';
  }
  
  getRightText() {
    return this.state.switchOn4 ? '' : 'On';
  }
  
  getLeftText() {
    return this.state.switchOn4 ? 'Off' : '';
  }

  getImage(){
      return this.state.switchOn4 ? <Image source={require('./assets/luzon.png')} /> : <Image source={require('./assets/luzoff.png')} />
    
  }

  render() {
    return (
      <View style={styles.container}>
          {this.getImage()}
          <TextInput
          style={styles.input}
          placeholder="Digite a url"
          onChangeText={text => this.setState.url = { text }}
        />
        <SwitchToggle
          buttonText={this.getButtonText()}
          backTextRight={this.getRightText()}
          backTextLeft={this.getLeftText()}  
          type={1}
          buttonStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute'
          }}
          
          rightContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          leftContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}
        
          buttonTextStyle={{fontSize: 20}}
          textRightStyle={{fontSize: 20}}
          textLeftStyle={{fontSize: 20}}
        
          containerStyle={{
            marginTop: 16,
            width: 160,
            height: 65,
            borderRadius: 30,
            padding: 5,
          }}
          backgroundColorOn='#fff'
          backgroundColorOff='#fff'
          circleStyle={{
            width: 80,
            height: 55,
            borderRadius: 27.5,
            backgroundColor: 'blue', // rgb(102,134,205)
          }}
          switchOn={this.state.switchOn4}
          onPress={this.onPress4}
          circleColorOff='#e5e1e0'
          circleColorOn='#e5e1e0'
          duration={500}
        />
      </View>
    );
  }
  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  }
  onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
  }
  onPress3 = () => {
    this.setState({ switchOn3: !this.state.switchOn3 });
  }
  onPress4 = () => {
    this.getConnection()
    this.setState({switchOn4: !this.state.switchOn4});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2229',
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CCC",
    borderWidth:1,
    fontSize: 16,
    borderRadius: 5,
    width: 200,
    height: 35,
    padding: 5,
    marginTop: 5
  }
});

