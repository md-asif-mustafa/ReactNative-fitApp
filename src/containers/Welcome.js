import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D62F0',
  },
  title: {
    flex: 0.2,
  },
  titleText: {
    fontSize: 48,
    fontWeight: '500',
    color: '#F7F7F7',
    textAlign: 'center',
  },
  lastWorkout: {
    flex: 0.4,
  },
  lastWorkoutText: {
    fontSize: 30,
    fontWeight: '200',
    color: '#F7F7F7',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    borderColor: '#D1EEFC',
    borderWidth: 3,
  },
  buttonText: {
    color: '#D1EEFC',
    fontWeight: '700',
  },
});

const Welcome = props => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Fit App </Text>
    </View>
    <View style={styles.lastWorkout}>
      <Text style={styles.lastWorkoutText}>Log your Fitness</Text>
    </View>
    <View>
      <TouchableOpacity style={styles.button} onPress={props.startWorkout}>
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Welcome.propTypes = {
  startWorkout: PropTypes.func,
};

Welcome.defaultProps = {
  startWorkout: value => value,
};

export default Welcome;
