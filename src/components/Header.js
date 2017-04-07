/* eslint import/no-unresolved: 0 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ToggleTodos from '../containers/ToggleTodos';
import styles from '../styles';

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
  },
  empty: {
    flex: 1,
  },
  toggleTodosContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

const Header = () => (
  <View style={componentStyles.container}>
    <View style={componentStyles.empty} />
    <Text style={[componentStyles.heading, styles.white]}>todos</Text>
    <View style={componentStyles.toggleTodosContainer}>
      <ToggleTodos />
    </View>
  </View>
);

export default Header;
