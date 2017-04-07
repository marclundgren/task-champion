/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

const Link = ({ active, children, onClick }) => {
  const activeStyle = (active ? styles.strong : null);

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.centered, styles.item, styles.row, styles.backgroundPrimary]}
    >

      <Text style={[styles.white, styles.centered, styles.centeredText, activeStyle]}>
        {children}
      </Text>

    </TouchableOpacity>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
