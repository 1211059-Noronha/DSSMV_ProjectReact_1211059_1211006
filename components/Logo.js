import React, { Component } from 'react';
import { Image } from 'react-native';




class Logo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { logoBackground } = this.props;
        return (
            <Image source={require('../assets/logo_light.png')} style={{ backgroundColor: logoBackground }} />
        );
    }
}

export default Logo;