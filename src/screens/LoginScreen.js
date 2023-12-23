import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Input from '../components/Input';
import Button from '../components/Button';

function LoginScreen() {
    const { height } = useWindowDimensions();

    const [userId, setUserId] = useState('');

    const handleLogin = () => {
        console.warn('Login functionality not yet implemented');
    };

    return (
        <View style={styles.container}>
            <Input placeholder="User ID" value={userId} setValue={setUserId} />
            <Button buttonText="Login" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
});

export default LoginScreen;
