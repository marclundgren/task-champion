/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from '../styles';

const TodoCount = ({ count }) => (
  <View style={styles.container}>
    <Text style={styles.gray}>{count} item{count !== 1 ? 's' : ''} left</Text>
  </View>
);

TodoCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default TodoCount;
