import React, { useContext } from 'react';
import { Image } from 'react-native';
import AppContext from '../context/AppContext';

const Logo = () => {
    const { state } = useContext(AppContext);
    const { logoBackground } = state.selectedTheme;
    return (
        <Image source={require('../figures/iseplogo.png')} style={{ backgroundColor: logoBackground }} />
    );
}

export default Logo;