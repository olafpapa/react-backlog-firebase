import React from 'react'
import { shallow } from 'enzyme';
import Notifications from '../../../components/dashboard/Notifications'

describe('<Notifications />', () => {

  const notifications = [
    { id: 1, content: 'test1', user: 'user1' },
    { id: 2, content: 'test2', user: 'user2' },
  ]

  it('表示確認', () => {
    // テスト用のdata-test属性
    const sel = id => `[data-test="${ id }"]`

    const wrapper = shallow(<Notifications notifications={ notifications }/>)

    expect(wrapper.find(sel('user')).length).toBe(2);
    expect(wrapper.find(sel('user')).at(0).text()).toEqual('user1');
    expect(wrapper.find(sel('user')).at(1).text()).toEqual('user2');

    expect(wrapper.find(sel('content')).length).toBe(2);
    expect(wrapper.find(sel('content')).at(0).text()).toEqual('test1');
    expect(wrapper.find(sel('content')).at(1).text()).toEqual('test2');

  })

});
