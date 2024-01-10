import * as React from 'react';
import {View, Text, Image} from 'react-native';
export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/education-school/library-icon.png'}}
                style = {{ width: 200, height: 200 }}/>
            <Text
                style={{ fontSize: 40, fontWeight: 'bold' , color: "#000000"}}>TrandBer</Text>
        </View>

    );
}
