import { combineReducers } from "redux"
import projectReducer from "./projectReducer"
import contactReducer from "./contactReducer"

export default combineReducers({
  contacts: contactReducer,
  projects: projectReducer
})
