import React from 'react';
import { View, Text } from 'react-native';

const NewsError = (props) => {

    return (
        <View style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'red' }}>
            <Text style={{ fontSize: 50 }}>Error: {props.message}</Text>
        </View>
    );

};
export default NewsError;