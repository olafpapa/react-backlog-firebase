import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

export const Navbar = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        { links }
      </div>
    </nav>

  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar)
