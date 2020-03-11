export function updateCounters(args) {
    return { type: 'COUNTERS', payload: args }
}

export function openModal(args) {
    return { type: 'MODALOPEN', payload: args }
}

export function closeModal() {
    return { type: 'MODALCLOSE' }
}