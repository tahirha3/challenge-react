import { combineReducers } from 'redux'
import accounts from './accounts'
import appointments from './appointments'
import leads from './leads'

const reducer = combineReducers({
  appointments,
  accounts,
  leads
})

export default reducer