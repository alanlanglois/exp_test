import React, { Component, PropTypes } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'
import { withNavigation } from '@exponent/ex-navigation';
import Router from '../navigation/Router';

export default class LobyScreen extends Component {

  _onPressCreate() {
    console.log('Create Pressed!');
    this.props.navigator.push(Router.getRoute('CreateUserScreen'));
  }

  _onPressLogin() {
    console.log('Login Pressed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeImage}>
          <Image
              source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.footer}>
        <Button title='CRÉER MON COMPTE' buttonStyle={styles.btnCreate} color='#06aaff' onPress={() => this._onPressCreate() }/>
        <Button title='SE CONNECTER' buttonStyle={ styles.btnLogin} onPress={() => this._onPressLogin() }/>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#11e675',
    flexDirection: 'column',
    flex: 1,
  },
  welcomeImage: {
    flex:0.8,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  footer: {
    flex:0.2,
    marginBottom:10,
  },
  btnCreate : {
    backgroundColor:"#FFFFFF",
  },
  btnLogin : {
    marginTop:10,
    backgroundColor:"#06aaff",
  }
});
