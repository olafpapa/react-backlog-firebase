import React from 'react'
import { shallow } from 'enzyme';
import ProjectSummary from '../../../components/projects/ProjectSummary'

describe('<ProjectSummary />', () => {

  const project = {
    id: 1, title: 'タイトル', authorFirstName: '太郎', authorLastName: '山田'
  }

  it('表示確認', () => {
    // テスト用のdata-test属性
    const sel = id => `[data-test="${ id }"]`

    const wrapper = shallow(<ProjectSummary project={ project }/>)

    expect(wrapper.find(sel('title')).length).toBe(1);
    expect(wrapper.find(sel('title')).text()).toEqual('タイトル');

    expect(wrapper.find(sel('name')).length).toBe(1);
    expect(wrapper.find(sel('name')).text()).toEqual('Posted by 山田 太郎');

  })

});
