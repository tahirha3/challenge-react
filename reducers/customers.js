import Immutable from 'immutable'

let dummyData = {
  name:"Dummy Customer",
  phone: "123-456-7890"
};

export default function customers (state = Immutable.List([dummyData]), action) {
  switch(action.type) {
    case 'addCustomer':
      return state.push({name:action.name, phone:action.phone})
    case 'deleteCustomer':
      return state.filter((lead, index) => index !== action.index)
    default:
      return state
  }
}