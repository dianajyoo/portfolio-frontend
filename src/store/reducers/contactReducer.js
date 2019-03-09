const initialState = {
  message: {},
  request: false,
  isError: false,
  isSuccess: false
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
    case "RECEIVED_ERROR":
      return {
        ...state, isError: true
      }
    case "RECEIVED_RESPONSE":
      return {
        ...state, isSuccess: true
      }
    case "RESET_ERROR":
      return {
        ...state, isError: false
      }
    default:
      return state
  }
}

export default contactReducer
