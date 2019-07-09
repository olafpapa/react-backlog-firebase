import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import  { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SignedOutLinks from '../../../components/layout/SignedOutLinks'

describe('<SignedOutLinks />', () => {

  it('子コンポーネントが存在すること', () => {
    // == 準備 ==
    /** Appコンポーネントをshallowレンダリング */
    const wrapper = shallow(<SignedOutLinks/>);

    // == 検証 ==
    /** コンポーネントの数を取得し、2であればOK */
    expect(wrapper.find(NavLink).length).toBe(2);
  });

  test('<SignedOutLinks />のスナップショット', () => {
    const tree = renderer
      .create(<BrowserRouter><SignedOutLinks /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
