import Immutable from 'immutable'

let dummyData = {
  name: "1st name",
  phone: "123-456-7890",
  logs: [
    { log: "this is a test log", time: "22 Feb" },
    { log: "this is a test log 2", time: "10 Mar" }
  ]
};

export default function leads(state = Immutable.List([dummyData]), action) {
  switch (action.type) {
    case 'addLead':
      return state.push({ name: action.name, phone: action.phone, logs: action.logs })
    case 'deleteLead':
      return state.filter((lead, index) => index !== action.index)
    default:
      return state
  }
}