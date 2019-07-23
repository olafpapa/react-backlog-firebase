import React from 'react'
import { shallow } from 'enzyme';
import { Dashboard } from '../../../components/dashboard/Dashboard'
import { ProjectList } from '../../../components/projects/ProjectList'
import { Notifications } from '../../../components/dashboard/Notifications'

describe('<Dashboard />', () => {

  const projects = [
    { id: 1, title: 'title1', authorFirstName: 'Taro', authorLastName: 'Yamada' },
    { id: 2, title: 'title2', authorFirstName: 'Hana', authorLastName: 'Yamada' },
  ]

  const notifications = [
    { id: 1, content: 'test1', user: 'user1' },
    { id: 2, content: 'test2', user: 'user2' },
  ]

  it('子コンポーネントが存在すること', () => {
    const wrapper = shallow(<Dashboard projects={ projects } notifications={ notifications }/>)
    expect(wrapper.find(ProjectList).length).toBe(1);
    expect(wrapper.find(Notifications).length).toBe(1);
  })

});
