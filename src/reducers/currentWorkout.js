import * as types from '../actions/types';

const currentWorkout = (state = {}, { type, payload }) => {
  switch (type) {
    case types.FETCH_CURRENT_WORKOUT_COMPLETE:
      return payload;
    default:
      return state;
  }
};

export default currentWorkout;
