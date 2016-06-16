export function addAccount(name, phone, logs) {
  return {
    type: 'addAccount',
    name,
    phone,
    logs
  }
}

export function deleteAccount(index) {
  return {
    type: 'deleteAccount',
    index
  }
}