import React from 'react'
import { shallow } from 'enzyme';
import ProjectList from '../../../components/projects/ProjectList'
import { ProjectSummary } from '../../../components/projects/ProjectSummary'

describe('<ProjectList />', () => {

  const projects = [
    { id: 1, title: 'title1', authorFirstName: 'Taro', authorLastName: 'Yamada' },
    { id: 2, title: 'title2', authorFirstName: 'Hana', authorLastName: 'Yamada' },
  ]

  it('ProjectSummaryの表示', () => {
    const wrapper = shallow(<ProjectList projects={ projects }/>)
    expect(wrapper.find(ProjectSummary).length).toBe(2);
  })

});
