const initialState = {
  message: {},
  request: false
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_TO_SEND_EMAIL":
      return {
        ...state, request: true
      }
    case "CLEAR_EMAIL_DETAILS":
      return {
        ...state, message: {}
      }
    case "SEND_EMAIL":
      return {
        ...state, message: action.data
      }
    default:
      return state
  }
}

export default contactReducer
