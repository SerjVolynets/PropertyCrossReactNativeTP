import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { style } from './style'
import { withNavigation } from 'react-navigation'



export default class MainPage extends Component {
  render() {
    return (
      <View style={style.mainContainer}>
        <Text>Property Cross in UK</Text>
          <Text>
            Use the form below to search for houses to buy.
          </Text>
          <Text>
            You can search by place-name or postcode.
          </Text>
          <TextInput style={style.textInputStyle}></TextInput>
          <Button
          title="Go to Search"
          onPress={() => this.props.navigation.navigate('SearchPage')}
        />
      </View>
    );
  }
}