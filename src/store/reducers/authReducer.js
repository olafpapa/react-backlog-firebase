import { ActionType } from '../actions/authActions'

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  if (!action) {
    return state
  }
  console.log(action)
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        authError: action.err.message
      }
    case ActionType.SIGNOUT_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case ActionType.SIGNOUT_ERROR:
      return {
        ...state,
        authError: action.err.message
      }
    case ActionType.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case ActionType.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer
