import React from 'react'
import { View, Text } from 'react-native'
import {style} from './style'


export default props => (
  <View style={style.mainContainerStyle}>
      <Text  onPress={props.onPress} style={style.textFoundCityStyle}> - {props.name} - </Text>
  </View>
);