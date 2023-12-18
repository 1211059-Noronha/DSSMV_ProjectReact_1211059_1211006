import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeItem from './ThemeItem';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { selectedTheme, availableThemes } = state;
  const availableThemeNames = availableThemes.map((theme) => theme.name);
  return (
    <View style={styles.container}>
      <Text style={{ color: selectedTheme.textColor, fontSize: 15 }}>Select theme:</Text>
      {availableThemeNames.map((name) => (
        <ThemeItem
          key={name}
          selectedTheme={selectedTheme}
          themeName={name}

        />))}
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },


});


export default Header;
