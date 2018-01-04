import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#1D62F0',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D1EEFC',
    borderBottomWidth: 2,
    padding: 20,
  },
  listItem: {
    fontSize: 24,
    color: '#D1EEFC',
  },
});

const Categories = props => (
  <View style={styles.container}>
    <FlatList
      data={props.exercises}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <View style={styles.list}>
          <Text style={styles.listItem}>{item.name}</Text>
        </View>
      )}
    />
  </View>
);

Categories.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
    }),
    name: PropTypes.string,
  })),
};

Categories.defaultProps = {
  exercises: [],
};

const mapStateToProps = state => ({
  exercises: state.currentWorkout.exercises,
});

export default connect(mapStateToProps, null)(Categories);
