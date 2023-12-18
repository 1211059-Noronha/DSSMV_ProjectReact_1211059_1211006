import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import AppContext from '../context/AppContext';


const Footer = () => {
    const { state } = useContext(AppContext);
    const { name, textColor } = state.selectedTheme;
    return (
        <View>
            <Text style={{ color: textColor, fontSize: 30 }}>{name}</Text>
        </View>
    );
}

export default Footer;