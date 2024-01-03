import * as React from 'react';
import { View, Text } from 'react-native';

export default function ManagementScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigate()}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Management Screen</Text>
        </View>
    );
}