export function addLead(name, phone) {
  return {
    type: 'addLead',
    name,
    phone,
    logs: []
  }
}

export function deleteLead(index) {
  return {
    type: 'deleteLead',
    index
  }
}
