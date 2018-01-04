import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TopBar, ExerciseModal } from '../components';
import { setExerciseModalVisibility } from '../actions/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D62F0',
    borderBottomColor: 'navy',
    borderBottomWidth: 3,
  },
  topbarText: {
    padding: 10,
    color: '#F7F7F7',
    fontSize: 26,
  },
  banner: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    padding: 10,
    color: '#FF2D55',
    fontSize: 26,
  },
  buttonText: {
    padding: 5,
    color: '#FF2D55',
    fontSize: 60,
  },
  workout: {
    borderColor: '#D1EEFC',
    borderBottomWidth: 2,
    padding: 20,
    backgroundColor: '#1D62F0',
  },
  workoutText: {
    color: '#D1EEFC',
    fontSize: 24,
  },
});

const CurrentWorkout = props => (
  <ScrollView style={styles.container}>
    <TopBar style={styles.topbar}>
      <Text style={styles.topbarText}>Current Workout</Text>
    </TopBar>
    <FlatList
      data={props.currentExercises}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <View style={styles.workout}>
          <Text style={styles.workoutText}>{item.name}</Text>
        </View>
      )}
    />
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Add some exercises</Text>
      <TouchableOpacity onPress={() => props.setModalVisibility(true)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
    <ExerciseModal
      visible={props.visible}
      setModalVisibility={() => props.setModalVisibility(false)}
    />
  </ScrollView>
);

CurrentWorkout.propTypes = {
  currentExercises: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
    }),
    name: PropTypes.string,
  })),
  setModalVisibility: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

CurrentWorkout.defaultProps = {
  currentExercises: [],
};

const mapStateToProps = state => ({
  visible: state.modal.visible,
  currentExercises: state.addExercise,
});

const mapActionsToProps = dispatch => ({
  setModalVisibility(visible) {
    return dispatch(setExerciseModalVisibility(visible));
  },
});

export default connect(mapStateToProps, mapActionsToProps)(CurrentWorkout);
