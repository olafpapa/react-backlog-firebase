const initState = { projects: [] }

const projectReducer = (state = initState, action) => {
  if (!action) {
    return state
  }
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state
    case 'CREATE_PROJECT_ERROR':
      return state
    case 'UPDATE_PROJECT':
      return state
    case 'UPDATE_PROJECT_ERROR':
      return state
    case 'DELETE_PROJECT':
      return state
    case 'DELETE_PROJECT_ERROR':
      return state
    default:
      return state
  }
}

export default projectReducer
