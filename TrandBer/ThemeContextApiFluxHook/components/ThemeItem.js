import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import  AppContext from '../context/AppContext';
import { selectTheme } from '../context/Actions';


const ThemeItem = (props) => {
  const { state, dispatch } = useContext(AppContext);;
  const { selectedTheme } = state;
  const { themeName } = props;
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

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 5
  }
})

export default ThemeItem;
