export const SET_VALUE_TEXTAREA = 'SET_VALUE_TEXTAREA'
export const SET_MESSAGE = 'SET_MESSAGE'

 

export function setValue(value){
    return {
    type: SET_VALUE_TEXTAREA,
    payload: value,
    }
}

export function setMessage(message){
    return {
    type: SET_MESSAGE,
    payload: message,
    }
}