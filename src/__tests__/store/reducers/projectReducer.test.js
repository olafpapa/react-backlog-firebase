import projectReducer from '../../../store/reducers/projectReducer'
import { ActionType } from '../../../store/actions/projectActions'

const initialState = {
  createError: null,
  updateError: null,
  deleteError: null,
}

const createProjectErrorState = {
  createError: 'エラーが発生しました',
  updateError: null,
  deleteError: null,
}

const updateProjectErrorState = {
  createError: null,
  updateError: 'エラーが発生しました',
  deleteError: null,
}

const deleteProjectErrorState = {
  createError: null,
  updateError: null,
  deleteError: 'エラーが発生しました',
}

describe('projectReducer', () => {

  it('初期状態', () => {
    expect(projectReducer()).toEqual(initialState);
  });

  it('CREATE PROJECT', () => {
    expect(projectReducer(initialState, { type: ActionType.CREATE_PROJECT })).toEqual(initialState);
  });

  it('CREATE PROJECT ERROR', () => {
    expect(projectReducer(initialState, {
      type: ActionType.CREATE_PROJECT_ERROR,
      err: { message: 'エラーが発生しました' }
    })).toEqual(createProjectErrorState);
  });

  it('UPDATE PROJECT', () => {
    expect(projectReducer(initialState, { type: ActionType.UPDATE_PROJECT })).toEqual(initialState);
  });

  it('UPDATE PROJECT ERROR', () => {
    expect(projectReducer(initialState, {
      type: ActionType.UPDATE_PROJECT_ERROR,
      err: { message: 'エラーが発生しました' }
    })).toEqual(updateProjectErrorState);
  });

  it('DELETE PROJECT', () => {
    expect(projectReducer(initialState, { type: ActionType.DELETE_PROJECT })).toEqual(initialState);
  });

  it('DELETE PROJECT ERROR', () => {
    expect(projectReducer(initialState, {
      type: ActionType.DELETE_PROJECT_ERROR,
      err: { message: 'エラーが発生しました' }
    })).toEqual(deleteProjectErrorState);
  });
});
