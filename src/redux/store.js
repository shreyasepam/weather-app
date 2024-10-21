import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // corrected import
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // correctly applied as middleware
);

export default store;