import { combineReducers } from 'redux'
import accounts from './accounts'
import leads from './leads'

const reducer = combineReducers({
  accounts,
  leads
})

export default reducer