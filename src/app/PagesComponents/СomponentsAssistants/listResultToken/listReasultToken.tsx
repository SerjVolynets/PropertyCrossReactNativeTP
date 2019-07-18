import React from 'react';
import { View, Image, Text } from 'react-native';

export default props => (
    <View>
        <Image style={{width: 300, height: 300}} source={{uri: props.src}} />
        <Text>
        £
        {props.name}
        {' '}
        </Text>
        <Text>{props.dis}</Text>
    </View>
);