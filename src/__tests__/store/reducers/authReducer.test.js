import authReducer from '../../../store/reducers/authReducer'
import { ActionType } from '../../../store/actions/authActions'

const initialState = {
  authError: null
}

const errorState = {
  authError: 'エラーが発生しました。'
}

describe('authReducer', () => {

  it('初期状態', () => {
    expect(authReducer()).toEqual(initialState);
  });

  it('LOGIN ERROR', () => {
    expect(authReducer(initialState, {
      type: ActionType.LOGIN_ERROR,
      err: { message: 'エラーが発生しました。' }
    })).toEqual(errorState);
  });

  it('LOGIN SUCCESS', () => {
    expect(authReducer(initialState, { type: ActionType.LOGIN_SUCCESS })).toEqual(initialState);
  });

  it('SIGNOUT SUCCESS', () => {
    expect(authReducer(initialState, { type: ActionType.SIGNOUT_SUCCESS })).toEqual(initialState);
  });

  it('SIGNOUT ERROR', () => {
    expect(authReducer(initialState, {
      type: ActionType.SIGNOUT_ERROR,
      err: { message: 'エラーが発生しました。' }
    })).toEqual(errorState);
  });

  it('SIGNUP SUCCESS', () => {
    expect(authReducer(initialState, { type: ActionType.SIGNUP_SUCCESS })).toEqual(initialState);
  });

  it('SIGNUP ERROR', () => {
    expect(authReducer(initialState, {
      type: ActionType.SIGNUP_ERROR,
      err: { message: 'エラーが発生しました。' }
    })).toEqual(errorState);
  });
});
