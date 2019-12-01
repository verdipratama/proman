import React from 'react';
import { NavLink } from 'react-router-dom';
// import pic from '../../assets/images/pic.jpeg';
import { connect } from 'react-redux';
import { logOut } from '../../store/action';

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.logOut} href="/">
          Logout
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {/* <img src={pic} alt="profile" style={{ display: 'block', width: '40px' }} /> */}
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
