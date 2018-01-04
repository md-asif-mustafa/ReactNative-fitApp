import { combineReducers } from 'redux';

import modal from './modal';
import currentWorkout from './currentWorkout';
import addExercise from './addExercise';

export default combineReducers({ modal, currentWorkout, addExercise });
