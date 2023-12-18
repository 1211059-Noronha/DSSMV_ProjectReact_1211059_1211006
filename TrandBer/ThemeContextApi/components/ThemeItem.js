import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Consumer } from '../context/AppContext';




class ThemeItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Consumer>{
        (context) => {
          const { selectedTheme, selectTheme } = context;
          const { themeName } = this.props;
          return (
            <View>
              <TouchableOpacity style={[styles.button, { backgroundColor: selectedTheme.btBackgroundColor }]}
                onPress={() => selectTheme(themeName)}>
                <Text style={{ color: selectedTheme.btTextColor }}> {themeName} </Text>
              </TouchableOpacity>
            </View >
          );
        }
      }
      </Consumer>
    );

  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 5
  }
})

export default ThemeItem;
