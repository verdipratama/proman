import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/index';
import thunk from 'redux-thunk';

import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import FBConfig from './config/FBConfig';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(FBConfig)
  )
);

export default store;
