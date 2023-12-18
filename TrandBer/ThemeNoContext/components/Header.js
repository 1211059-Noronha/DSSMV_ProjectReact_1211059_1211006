import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ThemeItem from './ThemeItem';


class Header extends Component {
  constructor(props) {
    super(props)
  }
  selectTheme = (name) => {
    this.props.selectTheme(name);
  }

  render() {
    const { selectedTheme, availableThemeNames } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ color: selectedTheme.textColor, fontSize: 15 }}>Select theme:</Text>
        {availableThemeNames.map((name) => (
          <ThemeItem
            key={name}
            selectedTheme={selectedTheme}
            themeName={name}
            select={() => this.selectTheme(name)}
          />))}
      </View>
    );
  }
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
