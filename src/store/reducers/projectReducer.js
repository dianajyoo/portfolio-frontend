const initialState = {
  photos: []
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PHOTO":
      return {
        ...state, photos: action.data
      }
    default:
      return state
  }
}

export default projectReducer