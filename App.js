import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, Button} from 'react-native';
class App extends Component {
constructor(props) {
super(props);
this.state = {
title: 'DSSMV: React-native example',
};
}
render() {

export default function App(){
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./assets/logo_light.png')}/>
            <Text>TrandBer</Text>
            <Button title="Reserve a Book" onPress={() => console.log("Button Clicked")}></Button>
            <Button title="Management" onPress={() => console.log("Button Clicked")}></Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        justifyContent: "top"
    },
});

}}
