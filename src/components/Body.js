import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Logo from './Logo';

class Body extends Component {
    render() {
        const { logoBackground } = this.props;
        return (
            <View>
                <Logo logoBackground={logoBackground} />
                <Text>Your favorite Library, now online</Text>
            </View>
        );
    }
}

export default Body;