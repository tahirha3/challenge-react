import { combineReducers } from 'redux'
import customers from './customers'
import leads from './leads'
import logs from './logs'

const reducer = combineReducers({
  customers,
  leads,
  logs
})

export default reducer