import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeItem from './ThemeItem';
import { Consumer } from '../context/AppContext';


class Header extends Component {
  constructor(props) {
    super(props)
  }
  selectTheme = (name) => {
    this.props.selectTheme(name);
  }

  render() {
    return (
      <Consumer>{
        (context) => {
          const { selectedTheme, availableThemeNames } = context;
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
      }
      </Consumer>
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
