const API_URL = "https://my-portfolio-backend.herokuapp.com/"

export const getPhoto = (data) => {
  return {
    type: "GET_PHOTO", data
  }
}

export const getProjectInfo = (data) => {
  return {
    type: "GET_PROJECT_INFO", data
  }
}

export function getAllPhotos(url) {
  return (dispatch) => {
    return fetch(API_URL + url)
      .then(res => res.json())
      .then(photos => {
        dispatch(getPhoto(photos))
      })
      .catch(console.error)
  }
}

export function getProjects(url) {
  return (dispatch) => {
    return fetch(API_URL + url)
      .then(res => res.json())
      .then(data => {
        dispatch(getProjectInfo(data))
      })
      .catch(console.error)
  }
}