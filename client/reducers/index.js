import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import ingredients from './ingredients'

const reducers = combineReducers({
  auth,
  quote,
  ingredients
})

export default reducers
