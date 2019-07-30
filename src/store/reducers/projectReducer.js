import { ActionType } from '../actions/projectActions'

const initState = {
  createError: null,
  updateError: null,
  deleteError: null,
}

const projectReducer = (state = initState, action) => {
  if (!action) {
    return state
  }
  switch (action.type) {
    case ActionType.CREATE_PROJECT:
      return {
        ...state,
        createError: null
      }
    case ActionType.CREATE_PROJECT_ERROR:
      return {
        ...state,
        createError: action.err.message
      }
    case ActionType.UPDATE_PROJECT:
      return {
        ...state,
        updateError: null
      }
    case ActionType.UPDATE_PROJECT_ERROR:
      return {
        ...state,
        updateError: action.err.message
      }
    case ActionType.DELETE_PROJECT:
      return {
        ...state,
        deleteError: null
      }
    case ActionType.DELETE_PROJECT_ERROR:
      return {
        ...state,
        deleteError: action.err.message
      }
    default:
      return state
  }
}

export default projectReducer
