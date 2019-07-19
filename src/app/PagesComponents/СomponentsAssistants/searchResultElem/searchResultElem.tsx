import React from 'react'
import { View, Text } from 'react-native'
import {style} from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default props => (
  <TouchableOpacity style={style.mainContainerStyle}>
      <Text  onPress={props.onPress} style={style.textFoundCityStyle}> - {props.name} - </Text>
  </TouchableOpacity>
);