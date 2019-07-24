import React from 'react'
import { shallow } from 'enzyme';
import { ProjectDetails } from '../../../components/projects/ProjectDetails'

describe('<ProjectDetails />', () => {
  let wrapper;

  const project = {
    id: 1, title: 'タイトル', content: '内容', authorFirstName: '太郎', authorLastName: '山田', authorId: 'abc'
  }
  const auth = {
    uid: 'abc'
  }
  const match = {
    params: { id: 'zzz' }
  }

  // DELETEボタンのモック
  const mockDeleteProject = jest.fn();
  // history.push()のモック
  const mockHistoryPush = jest.fn();
  // テスト用属性セレクター
  const sel = id => `[data-test="${ id }"]`

  beforeEach(() => {
    wrapper = shallow(<ProjectDetails project={ project } auth={ auth } deleteProject={ mockDeleteProject }
                                      match={ match } history={ { push: mockHistoryPush } }/>)
  })

  it('表示確認', () => {
    // テスト用のdata-test属性

    expect(wrapper.find(sel('title')).length).toBe(1);
    expect(wrapper.find(sel('title')).text()).toEqual('タイトル');

    expect(wrapper.find(sel('content')).length).toBe(1);
    expect(wrapper.find(sel('content')).text()).toEqual('内容');

    expect(wrapper.find(sel('name')).length).toBe(1);
    expect(wrapper.find(sel('name')).text()).toEqual('Posted by 山田 太郎');

  })

  it('DELETEボタン押下', () => {
    // confirmは常にYESをクリック
    global.confirm = () => true
    wrapper.find(sel('deletebutton')).simulate('click',
      {
        preventDefault() {
        }
      }
    )
    // DELETEボタンが1回押されたか
    expect(mockDeleteProject.mock.calls.length).toBe(1)
    // history.push()がコールされたか
    expect(mockHistoryPush.mock.calls.length).toBe(1)
  })

});
