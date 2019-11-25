import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <Loader
      type="Oval"
      color="#ff002b"
      height={40}
      width={40}
      timeout={3000} //3 secs
    />
  );
};

export default LoadingSpinner;
