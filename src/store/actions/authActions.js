export const ActionType = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  SIGNOUT_SUCCESS: 'SIGNOUT_SUCCESS',
  SIGNOUT_ERROR: 'SIGNOUT_ERROR',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',
}

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({type: ActionType.LOGIN_SUCCESS})
      })
      .catch((err) => {
        dispatch({type: ActionType.LOGIN_ERROR, err})
      })
  }
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut()
      .then(() => {
        dispatch({type: ActionType.SIGNOUT_SUCCESS})
      })
      .catch((err) => {
        dispatch({type: ActionType.SIGNOUT_ERROR, err})
      })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password,
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })

    }).then(() => {
      dispatch({type: ActionType.SIGNUP_SUCCESS})
    }).catch(err => {
      dispatch({type: ActionType.SIGNUP_ERROR, err})
    })
  }
}
