/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from '../styles';

const ToggleTodos = ({
  allTodosCompleted,
  hasTodos,
  onToggleAllInProgress,
  onToggleAllCompleted,
}) => {
  if (!hasTodos) {
    return (<View />);
  }

  const onChange = allTodosCompleted ? onToggleAllInProgress : onToggleAllCompleted;

  const text = `${allTodosCompleted ? 'uncheck' : 'check'} all`;

  return (
    <TouchableOpacity onPress={onChange}>
      <Text style={[styles.white, styles.padded, styles.bordered, styles.borderColorPrimary]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

ToggleTodos.propTypes = {
  allTodosCompleted: PropTypes.bool.isRequired,
  hasTodos: PropTypes.bool.isRequired,
  onToggleAllInProgress: PropTypes.func.isRequired,
  onToggleAllCompleted: PropTypes.func.isRequired,
};

export default ToggleTodos;
