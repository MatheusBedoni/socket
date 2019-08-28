/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn1: false,
      switchOn2: false,
      switchOn4: false
    };
  }
  
  getButtonText() {
    return this.state.switchOn4 ? 'Hour' : 'Day';
  }
  
  getRightText() {
    return this.state.switchOn4 ? '' : 'Hour';
  }
  
  getLeftText() {
    return this.state.switchOn4 ? 'Day' : '';
  }
  render() {
    return (
      <View style={styles.container}>
        
       
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
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#1F2229",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 17,
      color: "#FFFF00"
    },
    sul:{
      flex:1,
      marginTop: 5,
      alignItems:'center',
      justifyContent:'center',
  },
    buttons: {
      width: 200,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFF00",
      borderRadius: 5,
      marginTop: 5
    },
    buttonText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold"
    }
  });
  