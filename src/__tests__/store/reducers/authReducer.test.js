import authReducer from '../../../store/reducers/authReducer'

const initialState = {
  authError: null
}

const loginErrorState = {
  authError: 'Login failed'
}

const signupErrorState = {
  authError: 'エラーが発生しました。'
}

describe('authReducer', () => {

  it('初期状態', () => {
    expect(authReducer()).toEqual(initialState);
  });

  it('LOGIN ERROR', () => {
    expect(authReducer(initialState, { type: 'LOGIN_ERROR' })).toEqual(loginErrorState);
  });

  it('LOGIN SUCCESS', () => {
    expect(authReducer(initialState, { type: 'LOGIN_SUCCESS' })).toEqual(initialState);
  });

  it('SIGNOUT SUCCESS', () => {
    expect(authReducer(initialState, { type: 'SIGNOUT_SUCCESS' })).toEqual(initialState);
  });

  it('SIGNUP SUCCESS', () => {
    expect(authReducer(initialState, { type: 'SIGNUP_SUCCESS' })).toEqual(initialState);
  });

  it('SIGNUP ERROR', () => {
    expect(authReducer(initialState, {
      type: 'SIGNUP_ERROR',
      err: { message: 'エラーが発生しました。' }
    })).toEqual(signupErrorState);
  });
});
