const initState = {
  projects: [
    { id: 1, title: 'title1', content: 'hogehogehoge' },
    { id: 2, title: 'title2', content: 'hogehogehoge' },

  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state
    default:
      return state
  }
}

export default projectReducer
