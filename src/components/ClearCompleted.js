/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from '../styles';

const ClearCompleted = ({ onClearCompleted, hasCompletedTodos }) => {
  if (!hasCompletedTodos) {
    return (<View />);
  }

  return (
    <TouchableOpacity
      onPress={onClearCompleted}
      style={[styles.centered, styles.row, styles.backgroundSecondary]}
    >

      <Text style={[styles.white, styles.strong, styles.centered, styles.centeredText]}>
        Clear Completed
      </Text>

    </TouchableOpacity>
  );
};

ClearCompleted.propTypes = {
  onClearCompleted: PropTypes.func.isRequired,
  hasCompletedTodos: PropTypes.bool.isRequired,
};

export default ClearCompleted;
