import Immutable from 'immutable'

let dummyData = {
  time: "9:00pm 22 March 2016",
  name:"Dummy Appointment",
  phone: "123-456-7890"
};

export default function customers (state = Immutable.List([dummyData]), action) {
  switch(action.type) {
    case 'addAppointment':
      return state.push({name:action.name, phone:action.phone, time:action.time})
    case 'deleteAppointment':
      return state.filter((lead, index) => index !== action.index)
    default:
      return state
  }
}