import { combineReducers } from 'redux'
import customers from './customers'
import todos from './todos'
import leads from './leads'
import logs from './logs'

const reducer = combineReducers({
  todos,
  customers,
  leads,
  logs
})

export default reducer