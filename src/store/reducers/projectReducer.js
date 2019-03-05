const initialState = {
  photos: [],
  projects: []
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PHOTO":
      return {
        ...state, photos: action.data
      }
    case "GET_PROJECT_INFO":
      return {
        ...state, projects: action.data
      }
    default:
      return state
  }
}

export default projectReducer