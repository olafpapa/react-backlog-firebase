import React from 'react'
import { shallow } from 'enzyme';
import { CreateProject } from '../../../components/projects/CreateProject'

describe('<CreateProject />', () => {

  let wrapper;
  // CREATEボタンのモック
  const mockCreateProject = jest.fn();
  // history.push()のモック
  const mockHistoryPush = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CreateProject createProject={ mockCreateProject } history={ {push: mockHistoryPush} }/>)
  })

  it('CREATEボタン押下', () => {
    wrapper.find('#createProjectForm').simulate(
      'submit',
      {
        preventDefault() {}
      }
    )
    // CREATEボタンが1回押されたか
    expect(mockCreateProject).toHaveBeenCalledTimes(1)
    // history.push()がコールされたか
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)

  });

  it('タイトル入力', () => {
    wrapper.find('#title').simulate('change', {target: {id: 'title', value: 'Reactの勉強'}});
    expect(wrapper.state().title).toEqual('Reactの勉強');
  })

  it('コンテント入力', () => {
    wrapper.find('#content').simulate('change', {target: {id: 'content', value: '勉強会に参加します。'}});
    expect(wrapper.state().content).toEqual('勉強会に参加します。');
  })

});
