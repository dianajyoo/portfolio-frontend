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

export function submitContactRequest(url, data) {
  console.log(JSON.stringify({ data }))
  return (dispatch) => {
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
      dispatch(sendEmail(msg))
    })
    .catch(console.error)
  }
}
