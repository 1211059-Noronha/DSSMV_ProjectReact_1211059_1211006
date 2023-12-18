import React, { Component } from 'react';
import { Image } from 'react-native';
import { Consumer } from '../context/AppContext';

class Logo extends Component {
    render() {
        return (
            <Consumer>{
                (context) => {
                    const { logoBackground } = context.state.selectedTheme;
                    return (
                        <Image source={require('../figures/iseplogo.png')} style={{ backgroundColor: logoBackground }} />
                    );
                }
            }
            </Consumer>
        );
    }
}

export default Logo;