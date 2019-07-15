import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { style } from './style'

export default class SearchResultPage extends Component {
  render() {
    return (
      <View style={style.mainContainer}>
          <Text>
            Hi on search SearchResultPage 
          </Text>
          <Button
          title="Go to Current"
          onPress={() => this.props.navigation.navigate('CurrentPage')}
        />
      </View>
    );
  }
}