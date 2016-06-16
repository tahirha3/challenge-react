export function addLead(name, phone){
  return {
    type: 'addLead',
    name,
    phone
  }
}

export function deleteLead(index){
  return {
    type: 'deleteLead',
    index
  }
}
