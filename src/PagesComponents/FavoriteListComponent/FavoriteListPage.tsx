import * as React from 'react'
import { Text, View } from 'react-native';
import {style} from './style'

export default class CurrentPropertyPage extends React.Component {
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