import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Consumer } from '../context/AppContext';


class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Consumer>{
                (context) => {
                    const { name, textColor } = context.selectedTheme;
                    return (
                        <View>
                            <Text style={{ color: textColor, fontSize: 30 }}>{name}</Text>
                        </View>
                    )
                }
            }
            </Consumer>
        );

    }
}

export default Footer;