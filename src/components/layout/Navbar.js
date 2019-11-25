import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = props => {
  const { auth } = props;
  console.log(auth);

  // uuid dari object firebase
  // jika ada uuid arahkan ke signedInLinks
  // jika tidak ada uuid arahkan ke SignedOutLinks
  const navigation = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Proman
        </Link>
        {/* <SignedInLinks />
        <SignedOutLinks /> */}

        {/* {navigation} */}
        {/* perbaikan auth.isLoaded dari object firebase */}
        {/* auth.isloaded berfungsi untuk manipulasi agar link tidak keliahatan di UI/UX */}
        {auth.isLoaded && navigation}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    // AUTH adalah property
    // firebase adalah object yang auth ada di index.js store
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
