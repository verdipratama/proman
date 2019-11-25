import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../src/components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import CreateProject from '../src/components/projects/CreateProject';

import { Provider } from 'react-redux';
import store from './store';

import '../src/styles/index.css';
import * as serviceWorker from './serviceWorker';

/**
|--------------------------------------------------
| Syncing Data with Firestore
|--------------------------------------------------
*/

import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
            <div className="App-wrapper">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/project/:id" component={ProjectDetails} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/create" component={CreateProject} />
              </Switch>
            </div>
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
