import { createAction } from 'redux-actions';

const createAsyncCreator = (startAction, endAction, asycnFn) => (dispatch) => {
  dispatch(createAction(startAction)());
  const dispatchEndAction = createAction(endAction);
  return asycnFn(dispatch)
    .then(result => dispatch(dispatchEndAction(result)))
    .catch((e) => {
      console.log(e);
      dispatch(dispatchEndAction(e));
    });
};

export default createAsyncCreator;
