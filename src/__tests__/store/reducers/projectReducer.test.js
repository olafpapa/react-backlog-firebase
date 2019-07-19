import projectReducer from '../../../store/reducers/projectReducer'

const initialState = { projects: [] }

const createProjectState = {
  title: 'テストタイトル',
  content: 'テストコンテント',
}

const createProjectErrorState = {
  message: 'エラーが発生しました。'
}

describe('projectReducer', () => {

  it('初期状態', () => {
    expect(projectReducer()).toEqual(initialState);
  });

  it('CREATE PROJECT', () => {
    expect(projectReducer(createProjectState, { type: 'CREATE_PROJECT' })).toEqual(createProjectState);
  });

  it('CREATE PROJECT ERROR', () => {
    expect(projectReducer(createProjectErrorState, { type: 'CREATE_PROJECT_ERROR' })).toEqual(createProjectErrorState);
  });
});
