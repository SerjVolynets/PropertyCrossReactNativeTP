import React from 'react'
import { View, Text } from 'react-native'
import {style} from './style'


export default props => (
  <View style={style.mainContainerStyle}>
      <Text style={style.textDescriptionStyle}>
         Please select a location below:
      </Text>
      <Text  onPress={props.onPress} style={style.textFoundCityStyle}> - {props.name} - </Text>
  </View>
);