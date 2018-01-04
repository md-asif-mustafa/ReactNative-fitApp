import * as types from '../actions/types';

const addExercise = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXERCISE:
      return [payload, ...state];
    default:
      return state;
  }
};

export default addExercise;
