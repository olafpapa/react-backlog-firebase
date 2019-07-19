import React from 'react'
import { shallow } from 'enzyme';
import { SignUp } from '../../../components/auth/SignUp'

describe('<SignUp />', () => {

  let wrapper;
  // props.signInのモック
  const mockSignUp = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SignUp signUp={ mockSignUp }/>)
  })

  it('SIGN UPボタン押下', () => {
    wrapper.find('#signUpForm').simulate(
      'submit',
      {
        preventDefault() {}
      }
    )
    expect(mockSignUp.mock.calls.length).toBe(1)
  });

  it('Email入力', () => {
    wrapper.find('#email').simulate('change', { target: { id: 'email', value: 'test@test.com' } });
    expect(wrapper.state().email).toEqual('test@test.com');
  })

  it('パスワード入力', () => {
    wrapper.find('#password').simulate('change', { target: { id: 'password', value: 'abcdefg' } });
    expect(wrapper.state().password).toEqual('abcdefg');
  })

  it('First Name入力', () => {
    wrapper.find('#firstName').simulate('change', { target: { id: 'firstName', value: 'Steve' } });
    expect(wrapper.state().firstName).toEqual('Steve');
  })

  it('Last Name入力', () => {
    wrapper.find('#lastName').simulate('change', { target: { id: 'lastName', value: 'Jobs' } });
    expect(wrapper.state().lastName).toEqual('Jobs');
  })
});
