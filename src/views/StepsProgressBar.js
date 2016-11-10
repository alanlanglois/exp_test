import React, {
  Component,
  PropTypes,
} from 'react';

import { Animated, Easing, View, Text, StyleSheet} from 'react-native';

export default class StepsProgressBar extends Component {

  getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  };

  render() {



    let test = [];
    let color;
    let boxStyle = this.props.stepStyle;
    for (let i = 0; i < this.props.num; i++) {
        color = this.props.undoneColor
        if( this.props.currentStep == i + 1 ){ color = this.props.currentColor }
        if( (i+1) < this.props.currentStep ) { color = this.props.doneColor }
        if ( (i+1) == this.props.num ) boxStyle = this.props.stepLastStyle
        test.push( <View key={i} style={[ styles.progressStyle, {backgroundColor:color }, boxStyle]} />)
    }

    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.row}>
          {test}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  row:{
    backgroundColor:'#333333',
    flexDirection: 'row',
    flex: 1,
  },
  progressStyle: {
    backgroundColor: '#06aaff',
    flex:1
  }
});
