import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../src/components/layout/Navbar';

import * as serviceWorker from './serviceWorker';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-wrapper">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
