import { combineReducers } from 'redux';
import { authReducer, projectReducer } from './reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
