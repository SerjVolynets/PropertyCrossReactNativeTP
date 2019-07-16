import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {style} from './style'

export default class CurrentPropertyPage extends Component {
  render() {
    return (
      <View style={style.mainContainer}>
          <Text>
            Hi on FavoriteListPage 
          </Text>
      </View>
    );
  }
}