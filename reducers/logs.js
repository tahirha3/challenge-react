import Immutable from 'immutable'

let dummylogs = 
  {
    id: 1,
    time:"10 Mar",
    desc: "This section is under construction"
  };

export default function logs (state = Immutable.List([dummylogs]), action) {
  switch(action.type) {
    case 'addLog':
      return state.push({id:action.id, time:action.time, desc:action.desc})
    case 'deleteLog':
      return state.filter((lead, index) => index !== action.index)
    default:
      return state
  }
}