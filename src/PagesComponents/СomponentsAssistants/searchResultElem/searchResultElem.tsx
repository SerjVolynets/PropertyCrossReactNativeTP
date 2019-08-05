import * as React from 'react'
import { Text } from 'react-native'
import {style} from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default (props: { onPress: ((event: import("react-native").GestureResponderEvent) => void) | undefined; name: React.ReactNode; }) => (
  <TouchableOpacity style={style.mainContainerStyle}>
      <Text  onPress={props.onPress} style={style.textFoundCityStyle}>  {props.name}  </Text>
  </TouchableOpacity>
);