import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/action';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    // pas props auth with firebase
    this.props.logIn(this.state);

    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} value={this.state.email} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {/*jika error tampilkan state error dan jika tidak error = null, */}
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // Setup untuk menampilkan error !!!
    // authError -> property untuk di jsx
    // auth -> dari index.js (store)
    // authError -> dari reducer.js
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // property logIn samakan dengan handlesubmit
    logIn: creds => dispatch(logIn(creds))
  };
};

// kalo tidak ada mapStateToProps tambahkan NULL
export default connect(mapStateToProps, mapDispatchToProps)(Login);
