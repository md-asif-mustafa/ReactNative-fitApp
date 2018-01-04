import createAsyncCreator from '../services/asyncCreators';
import get from '../services/api';
import * as types from './types';

const fetchCurrentWorkout = () =>
  createAsyncCreator(types.FETCH_CURRENT_WORKOUT, types.FETCH_CURRENT_WORKOUT_COMPLETE, () =>
    get());

export default fetchCurrentWorkout;
