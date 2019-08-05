import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { SignedInLinks } from '../../../components/layout/SignedInLinks'

describe('<SignedInLinks />', () => {

  const profile = {
    initials: 'AA'
  }
  let wrapper;

  // LOG OUTのモック
  const mockSignOut = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SignedInLinks profile={ profile } signOut={ mockSignOut }/>)
  })

  it('LOG OUTボタン押下', () => {
    wrapper.find('a').simulate('click', {
      preventDefault() {}
    })
    // ボタンが1回押されたか
    expect(mockSignOut).toHaveBeenCalledTimes(1)
  });

  it('子コンポーネントが存在すること', () => {
    // NavLinkコンポーネントの数を取得し、2であればOK
    expect(wrapper.find(NavLink).length).toBe(2);
  });

  test('<SignedInLinks />のスナップショット', () => {
    const tree = renderer
      .create(<BrowserRouter><SignedInLinks profile={ profile } signOut={ mockSignOut }/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
