import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

export const SignedInLinks = (props) => {
  const handleSignOut = (e) => {
    e.preventDefault()
    props.signOut()
  }

  return (
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      {/*eslint-disable-next-line*/}
      <li><a onClick={ handleSignOut }>Log out</a></li>
      <li><NavLink to='/' className="btn btn-floating pink lighten-1">
        { props.profile.initials }
      </NavLink></li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
