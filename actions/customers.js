export function addCustomer(name, phone){
  return {
    type: 'addCustomer',
    name,
    phone
  }
}

export function deleteCustomer(index){
  return {
    type: 'deleteCustomer',
    index
  }
}