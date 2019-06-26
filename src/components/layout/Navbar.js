import * as React from 'react';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

export const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <SignedInLinks/>
        <SignedOutLinks/>
      </div>
    </nav>

  );
};

export default Navbar
