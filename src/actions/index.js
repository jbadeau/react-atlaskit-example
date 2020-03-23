export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';
export const SUBSCRIBE = 'SUBSCRIBE';


export function setUser(payload) {
    return {
        type: SET_USER, payload
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}

export function subscribe(payload) {
    return {
        type: SUBSCRIBE, payload
    }
}

