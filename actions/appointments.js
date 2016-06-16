export function addAppointment(name, phone, time) {
    return {
        type: 'addAppointment',
        name,
        phone,
        time
    }
}

export function deleteAppointment(index) {
    return {
        type: 'deleteAppointment',
        index
    }
}