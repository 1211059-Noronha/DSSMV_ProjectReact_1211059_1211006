import React, { useContext } from 'react';
import { View, StyleSheet, } from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import AppContext from '../context/AppContext';

const Screen = () => {
    const { state } = useContext(AppContext);
    const { selectedTheme } = state;
    return (
        <View style={[styles.container, { backgroundColor: selectedTheme.backgroundColor }]}>
            <View style={[styles.header, { borderColor: selectedTheme.borderColor }]}>
                <Header />
            </View>
            <View style={styles.body}>
                <Body />
            </View>

            <View style={[styles.footer, { borderColor: selectedTheme.borderColor }]}>
                <Footer />
            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        flex: 1.5,
        borderBottomWidth: 2,
    },
    body: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        borderTopWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

});



export default Screen;