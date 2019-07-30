export const ActionType = {
  CREATE_PROJECT: 'CREATE_PROJECT',
  CREATE_PROJECT_ERROR: 'CREATE_PROJECT_ERROR',
  UPDATE_PROJECT: 'UPDATE_PROJECT',
  UPDATE_PROJECT_ERROR: 'UPDATE_PROJECT_ERROR',
  DELETE_PROJECT: 'DELETE_PROJECT',
  DELETE_PROJECT_ERROR: 'DELETE_PROJECT_ERROR',
}

export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(() => {
        dispatch({type: ActionType.CREATE_PROJECT, project})
      }).catch((err) => {
      dispatch({type: ActionType.CREATE_PROJECT_ERROR, err})
    })
  }
}

export const updateProject = (project) => {
  const {title, content, id} = project
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    firestore.collection('projects').doc(id).set({
      title,
      content,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      updatedAt: new Date()
    }, {merge: true}).then(() => {
      dispatch({type: ActionType.UPDATE_PROJECT, project})
    }).catch((err) => {
      dispatch({type: ActionType.UPDATE_PROJECT_ERROR, err})
    })
  }
}

export const deleteProject = (id) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore()

    firestore.collection('projects').doc(id).delete()
      .then(() => {
        dispatch({type: ActionType.DELETE_PROJECT, id})
      }).catch((err) => {
      dispatch({type: ActionType.DELETE_PROJECT_ERROR, err})
    })
  }
}
