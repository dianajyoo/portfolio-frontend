import { combineReducers } from "redux"
import projects from "./projectReducer"
import contacts from "./contactReducer"

export default combineReducers({
  contacts,
  projects
})
