import * as types from '../actions/types';

const modal = (state = { visible: false }, { type, payload }) => {
  switch (type) {
    case types.SET_EXERCISE_VISIBILITY:
      return {
        ...state,
        visible: payload,
      };
    default:
      return state;
  }
};

export default modal;
