import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import ingredients from './ingredients'
import skills from './skills'
import locations from './locations'

const reducers = combineReducers({
  auth,
  quote,
  ingredients,
  skills,
  locations
})

export default reducers
