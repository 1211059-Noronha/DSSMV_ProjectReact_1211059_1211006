
import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';



class Screen extends Component {
    constructor(props) {
        super(props)
    }
    selectTheme = (name) => {
        console.log("Screen: selectTheme(" + name + ")")
        this.props.selectTheme(name);
    }
    render() {
        const { selectedTheme, availableThemeNames } = this.props;
        return (
            <View style={[styles.container, { backgroundColor: selectedTheme.backgroundColor }]}>
                <View style={[styles.header, { borderColor: selectedTheme.borderColor }]}>
                    <Header
                        selectedTheme={selectedTheme}
                        availableThemeNames={availableThemeNames}
                        selectTheme={this.selectTheme}
                    />
                </View>
                <View style={styles.body}>
                    <Body selectedTheme={selectedTheme} />
                </View>
                <View style={[styles.footer, { borderColor: selectedTheme.borderColor }]}>
                    <Footer selectedTheme={selectedTheme} />
                </View>
            </View >
        );
    }
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
