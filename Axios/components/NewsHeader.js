import React from 'react';
import { View, Text } from 'react-native';

const NewsHeader = (props) => {

    return (
        <View style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'blue' }}>
            <Text style={{ fontSize: 30 }}>Query: {props.query}</Text>
        </View>
    );

};
export default NewsHeader;