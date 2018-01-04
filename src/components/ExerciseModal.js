import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopBar from './TopBar';
import SearchBar from './SearchBar';
import fetchCurrentWorkout from '../actions/actionCreators';
import { addExercise } from '../actions/actions';
import fuzzySearch from '../services/fuzzySearch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  close: {
    flex: 0.1,
    marginLeft: 20,
  },
  closeText: {
    padding: 5,
    color: 'navy',
    fontSize: 30,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D62F0',
    borderBottomColor: 'navy',
    borderBottomWidth: 3,
  },
  searchBar: {
    backgroundColor: 'white',
    flex: 0.8,
    borderColor: '#D1EEFC',
    borderWidth: 1,
    height: 35,
    padding: 5,
    paddingLeft: 15,
    justifyContent: 'center',
    borderRadius: 20,
  },
  input: {
    color: 'black',
    fontSize: 20,
  },
  row: {
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: '#1D62F0',
    borderColor: 'navy',
  },
  rowName: {
    fontSize: 24,
    color: '#D1EEFC',
  },
});

class ExerciseModal extends Component {
  state = {
    matchingExercises: [],
  };

  componentDidMount() {
    this.props.fetchCurrentWorkout();
  }

  handleSearch = (searchTerm) => {
    let newState;
    if (!searchTerm || searchTerm.length < 3) {
      newState = [];
    } else {
      newState = fuzzySearch(searchTerm, this.props.exercises, 'name');
    }
    this.setState({ matchingExercises: newState });
  };

  handlePress = (item) => {
    this.props.addExercise(item);
    this.setState({ matchingExercises: [] });
    this.props.setModalVisibility();
  };

  render() {
    const { visible, setModalVisibility } = this.props;
    const { matchingExercises } = this.state;
    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
          <TopBar style={styles.topbar}>
            <SearchBar
              placeholder="Search for Exercises"
              autoFocus
              containerStyle={styles.searchBar}
              style={styles.input}
              onTextChange={this.handleSearch}
            />
            <TouchableOpacity style={styles.close} onPress={setModalVisibility}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          </TopBar>
          <FlatList
            data={matchingExercises}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => this.handlePress(item)}>
                <View style={styles.row}>
                  <Text style={styles.rowName}>{item.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </Modal>
    );
  }
}

ExerciseModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setModalVisibility: PropTypes.func.isRequired,
  fetchCurrentWorkout: PropTypes.func.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
    }),
    name: PropTypes.string,
  })),
  addExercise: PropTypes.func.isRequired,
};

ExerciseModal.defaultProps = {
  exercises: [],
};

const mapStateToProps = state => ({
  exercises: state.currentWorkout.exercises,
});

const mapActionsToProps = dispatch => ({
  fetchCurrentWorkout() {
    return dispatch(fetchCurrentWorkout());
  },
  addExercise(exercise) {
    return dispatch(addExercise(exercise));
  },
});

export default connect(mapStateToProps, mapActionsToProps)(ExerciseModal);
