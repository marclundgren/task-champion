/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
// import CheckBox from 'react-native-checkbox';
import { Checkbox } from 'react-native-material-ui';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import styles from '../styles';


const componentStyles = StyleSheet.create({
  containerCheckbox: {
    flexGrow: 1,
    flexShrink: 8,
    flexBasis: 0.2
  },
  containerClose: {
    flexGrow: 1,
    flexShrink: 8,
    flexBasis: 0.2
  },
  text: {
    flexGrow: 4,
    flexShrink: 1,
    flexBasis: 0.8
  },
  container: {
    flex: 1,
    // flexDirection: 'row-reverse',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'center',
  },
  completed: {
    // flex: 2,
    textDecorationLine: 'line-through',
    alignSelf: 'stretch',
    flexDirection: 'row',
    // textAlign: 'left',
  },
  // closeContainer: {
  //   flex:
  // },
});

const Todo = ({ onToggle, onDestroy, completed, text }) => {
  const completedStyle = (completed ? styles.completed : null);

  return (
    <View style={[componentStyles.container]}>
      {/* flex: 1 */}
      <View style={[styles.item, componentStyles.containerCheckbox]}>
        <Checkbox
          value='Value'
          uncheckedIcon='star-border'
          checkedIcon='star'
          checked={completed}
          onCheck={onToggle}
        />
      </View>

      <Text style={[componentStyles.text, completedStyle, styles.padded]}>
        {text}
      </Text>

      {/* flex: 1 */}
      <TouchableOpacity
        style={[styles.item, componentStyles.containerClose]}
        onPress={onDestroy}
      >
        <Text style={[styles.centeredText, styles.padded, styles.gray, styles.borderColorTertiary]}>
          x
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Todo.propTypes = {
  onDestroy: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
