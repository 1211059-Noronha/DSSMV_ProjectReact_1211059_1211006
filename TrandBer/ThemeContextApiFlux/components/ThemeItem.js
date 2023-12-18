import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Consumer } from '../context/AppContext';
import { selectTheme } from '../context/Actions';




class ThemeItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Consumer>{
        (context) => {
          const { state, dispatch } = context;
          const { selectedTheme } = state;
          const { themeName } = this.props;
          const action = selectTheme(themeName);
          return (
            <View>
              <TouchableOpacity style={[styles.button, { backgroundColor: selectedTheme.btBackgroundColor }]}
                onPress={() => dispatch(action)}>
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
