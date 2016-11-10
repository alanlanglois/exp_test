import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationStyles } from '@exponent/ex-navigation';
import { FormLabel, FormInput } from 'react-native-elements'
import { Button } from 'react-native-elements'
import TextField from 'react-native-md-textinput';

import StepsProgressBar from '../views/StepsProgressBar'
import KeyboardSpacer from 'react-native-keyboard-spacer';


export default class CreateUserScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tiEmpty:  [true, true, true],
      isFormCompleted: false,
    }

    setInterval(() => {
       console.log( this.state.isFormCompleted );
    }, 1000);
  }


  static route = {
      styles: {
        ...NavigationStyles.SlideHorizontal,
      },
      navigationBar: {
         title: 'CREATION DE COMPTE',
      }
    };

  updateTextField = (id, value) => {
    this.state.tiEmpty[id] = value;
    this.checkValid();
  }

  checkValid(){
    let isValid = true;
    for(let i = 0 ; i < this.state.tiEmpty.length ; i++ ){
      if( this.state.tiEmpty[{i}] ) isValid = false;
      break;
    }
    console.log( ">>>> " + isValid );

    this.state.isFormCompleted = isValid;


  }

  focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

  render() {

    return (

      <View style={styles.container}>
        <StepsProgressBar style={styles.progressBar} num='3' currentStep='1' currentColor="#CCCCCC" doneColor="#5eca4c" undoneColor="#FFFFFF" stepStyle={styles.stepBox} stepLastStyle={styles.stepBoxLast}></StepsProgressBar>
        <View style={styles.formContainer}>
          <TextField ref='1' label={"Prénom"} highlightColor={'#00BCD4'} id={'0'} onUpdateText={this.updateTextField} onEndEditing={() => this.focusNextField('2')}/>
          <TextField ref='2' label={"Nom"} highlightColor={'#00BCD4'} id={'1'}  onUpdateText={this.updateTextField} maxLength={2} onEndEditing={() => this.focusNextField('3')}/>
          <TextField ref='3' label={"N° de téléphone"} id={'2'} onUpdateText={this.updateTextField} highlightColor={'#00BCD4'} keyboardType={'numeric'}/>
        </View>
        <View style={styles.footer}>
          <Button title='SUIVANT' disabled={!this.state.isFormCompleted} buttonStyle={(this.state.isFormCompleted) ? styles.btnNextEnabled : styles.btnNextDisabled} color={ (this.state.isFormCompleted) ? '#FFFFFF' : '#888888'} />
        </View>
        <KeyboardSpacer/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  stepBox : {
    borderStyle:'solid',
    borderColor:'#888888',
    borderWidth: 1,
    borderLeftWidth: 0,
  },

  stepBoxLast : {
    borderStyle:'solid',
    borderColor:'#888888',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex:1,
  },
  footer: {
    flex:0.1,
    marginBottom:10,
  },
  btnNextDisabled : {
    backgroundColor:"#DDDDDD",
  },
  btnNextEnabled : {
    backgroundColor:"#5eca4c",
  },
  progressBar : {
    height:20,
  },
  formContainer : {
    marginLeft:20,
    marginRight:20,
    flex: 0.6,
    justifyContent:'space-around',
  },
  textinputContainer : {
    backgroundColor: '#FFFFFF',
    height: 45,
    paddingLeft: 5,
    paddingRight: 5
  },
  textinputInput : {
    fontSize: 18,
  }
});
