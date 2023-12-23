import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, } from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

function WelcomeScreen(props) {
    return (
        <>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo_light.png')}/>
                <Text>Your favorite Library, now online</Text>
            </View>
            <View style={styles.reserveButton}></View>
            <View style={styles.managementButton}></View>
        </>
);
}

const styles = StyleSheet.create({
    reserveButton: {
        width: '100%', // Incorrect style property: should be 'width' instead of 'width:'
        height: 70,
        top: 70
    },
    managementButton: {
        width: '100%',
        height: 70,
        top: 90
    },
    logo_light: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
});

export default WelcomeScreen;
