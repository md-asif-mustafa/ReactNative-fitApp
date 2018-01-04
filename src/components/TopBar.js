import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});

const TopBar = props => <View style={[styles.container, props.style]}>{props.children}</View>;

TopBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  // eslint-disable-next-line react/no-typos
  style: View.propTypes.style,
};

TopBar.defaultProps = {
  style: {},
};

export default TopBar;
