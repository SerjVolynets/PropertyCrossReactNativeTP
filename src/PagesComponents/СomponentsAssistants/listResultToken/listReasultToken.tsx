import * as React from 'react'
import { View, Image, Text } from 'react-native'
import {style} from './style'

export default (props: { src: string | undefined; name: number; dis: string;}) => (
    <View>
        <View style={style.mainContainer}>
            <Image style={{width: 300, height: 300}} source={{uri: props.src}} />
            <Text style={style.textDescriptionStyle}>
            £
            {props.name}
            {' '}
            </Text>
            <Text style={style.textDescriptionStyle}>{props.dis}</Text>
        </View>
    </View>
);