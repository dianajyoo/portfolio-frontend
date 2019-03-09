const API_URL = "http://localhost:3000/"

export const requestToSendEmail = () => {
  return {
    type: "REQUEST_TO_SEND_EMAIL"
  }
}

export const clearEmailDetails = () => {
  return {
    type: "CLEAR_EMAIL_DETAILS"
  }
}

export const sendEmail = (data) => {
  return {
    type: "SEND_EMAIL", data
  }
}

export const receivedError = () => {
  return {
    type: "RECEIVED_ERROR"
  }
}

export const receivedResponse = () => {
  return {
    type: "RECEIVED_RESPONSE"
  }
}

export const resetError = () => {
  return {
    type: "RESET_ERROR"
  }
}

export function submitContactRequest(url, data) {
  return (dispatch) => {
    dispatch(requestToSendEmail())
    dispatch(clearEmailDetails())
    return fetch(API_URL + url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    })
    .then(res => res.json())
    .then(msg => {
      if (msg.message === "Error") {
        dispatch(receivedError())
      } else {
        dispatch(receivedResponse())
        dispatch(sendEmail(msg))
      }
    })
    .then(dispatch(resetError()))
    .catch(err => {
      dispatch(receivedError())
    })
  }
}

