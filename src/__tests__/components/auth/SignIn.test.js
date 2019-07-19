import React from 'react'
import { shallow } from 'enzyme';
import { SignIn } from '../../../components/auth/SignIn'

describe('<SignIn />', () => {

  let wrapper;
  // props.signInのモック
  const mockSignIn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SignIn signIn={ mockSignIn }/>)
  })

  it('ログインボタン押下', () => {
    wrapper.find('#signInForm').simulate(
      'submit',
      {
        preventDefault() {}
      }
    )
    expect(mockSignIn.mock.calls.length).toBe(1)
  });

  it('Email入力', () => {
    wrapper.find('#email').simulate('change', { target: { id: 'email', value: 'test@test.com' } });
    expect(wrapper.state().email).toEqual('test@test.com');
  })

  it('パスワード入力', () => {
    wrapper.find('#password').simulate('change', { target: { id: 'password', value: 'abcde' } });
    expect(wrapper.state().password).toEqual('abcde');
  })
});
