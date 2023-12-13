import React, { Component } from 'react';
import { View, Text } from 'react-native';


class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { name, textColor } = this.props.selectedTheme;
        return (
            <View>
                <Text style={{ color: textColor, fontSize: 30 }}>{name}</Text>
            </View>
        );
    }
}

export default Footer;