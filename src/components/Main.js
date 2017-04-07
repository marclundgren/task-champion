/* eslint import/no-unresolved: 0 */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Footer from '../containers/Footer';
import AddTodo from '../containers/AddTodo';
import Header from './Header';
import VisibleTodoList from '../containers/VisibleTodoList';
import styles from '../styles';

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  visibleTodoList: {
    flex: 7,
  },
});

const App = () => (
  <View style={[componentStyles.container, styles.column]}>
    <View style={[styles.item, styles.backgroundPrimary]}>
      <Header />
    </View>

    <View style={[styles.item, styles.centered, styles.backgroundPrimary]}>
      <AddTodo />
    </View>

    <View style={componentStyles.visibleTodoList}>
      <VisibleTodoList style={styles.column} />
    </View>

    <View style={styles.item}>
      <Footer />
    </View>
  </View>
);

export default App;
