const API_URL = "http://localhost:3000/"

export const getPhoto = (data) => {
  return {
    type: "GET_PHOTO", data
  }
}

export function getPhotoUrl(url) {
  return (dispatch) => {
    return fetch(API_URL + url)
      .then(res => res.json())
      .then(photos => {
        dispatch(getPhoto(photos))
      })
      .catch(console.error)
  }
}