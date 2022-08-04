// Local Storage
export function loadItem(key, initialState) {

    const item = localStorage.getItem(key)

    if (item === null) {
        localStorage.setItem(key, JSON.stringify(initialState))
        return initialState
    } else {
        return JSON.parse(item)
    }
}

export function setItem(key, state) {
    localStorage.setItem(key, JSON.stringify(state))
}