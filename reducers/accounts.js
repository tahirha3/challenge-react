import Immutable from 'immutable'

let dummyData = {
  name: "Dummy Customer",
  phone: "123-456-7890",
  logs: [
    { log: "Old log ", time: "23/3/2015 @ 2:15:35" },
    { log: "another log", time: "13/4/2015 @ 6:45:22" }
  ]
};

export default function customers(state = Immutable.List([dummyData]), action) {
  switch (action.type) {
    case 'addAccount':
      return state.push({ name: action.name, phone: action.phone, logs: action.logs })
    case 'deleteAccount':
      return state.filter((lead, index) => index !== action.index)
    default:
      return state
  }
}