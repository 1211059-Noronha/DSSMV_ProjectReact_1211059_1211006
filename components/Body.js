
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Logo from "./Logo";


class Body extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { logoBackground } = this.props.selectedTheme;
        return (
            <View>
                <Logo logoBackground={logoBackground} />
            </View>);
    }
}

export default Body;