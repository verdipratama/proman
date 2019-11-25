import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Routing = props => {
  const { uid } = props.auth;

  if (uid) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Routing);
