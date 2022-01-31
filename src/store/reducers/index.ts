import { combineReducers } from 'redux'
import auth from './auth'

const rootReducer = combineReducers({
  authReducer: auth
})

export default rootReducer;