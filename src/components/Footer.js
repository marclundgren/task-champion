/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';
import FilterLink from '../containers/FilterLink';
import styles from '../styles';

const Filters = () => (
  <View style={[styles.item, styles.row]}>
    <View style={[styles.item, styles.centered]}>
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
    </View>
    <View style={[styles.item, styles.centered]}>
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
    </View>
    <View style={[styles.item, styles.centered]}>
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </View>
  </View>
);

const Footer = ({ hasTodos }) => {
  if (!hasTodos) {
    return (<View style={[styles.container, styles.column]} />);
  }

  return (
    <View style={[styles.container, styles.column]}>
      <Filters />
    </View>
  );
};

Footer.propTypes = {
  hasTodos: PropTypes.bool.isRequired,
};

export default Footer;
