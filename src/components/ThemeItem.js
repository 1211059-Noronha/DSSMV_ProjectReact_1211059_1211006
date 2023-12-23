import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



class ThemeItem extends Component {
  constructor(props) {
    super(props)
  }
  selectTheme = (name) => {
    console.log("ThemeItem: selectTheme(" + name + ")")
    this.props.select(name);
  }
  render() {
    const { selectedTheme, themeName } = this.props;
    return (
      <View>
        <TouchableOpacity style={[styles.button, { backgroundColor: selectedTheme.btBackgroundColor }]}
          onPress={() => this.selectTheme(themeName)}>
          <Text style={{ color: selectedTheme.btTextColor }}> {themeName} </Text>
        </TouchableOpacity>
      </View >
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
