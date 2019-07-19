import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import {style} from './style'

export default props => (
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