const initState = {
  projects: [
    { id: 1, title: 'title1', content: 'hogehogehoge' },
    { id: 2, title: 'title2', content: 'hogehogehoge' },

  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create pro', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log(action.err)
      return state
    default:
      return state
  }
}

export default projectReducer
