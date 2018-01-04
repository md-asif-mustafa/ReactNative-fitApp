import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let myMiddleware;
if (process.env.NODE_ENV === 'production') {
  myMiddleware = applyMiddleware(thunk);
} else {
  // myMiddleware = applyMiddleware(logger, thunk);
  myMiddleware = applyMiddleware(thunk);
}
export default createStore(rootReducer, myMiddleware);
