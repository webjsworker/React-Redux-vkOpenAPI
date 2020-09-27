import {SET_VALUE_TEXTAREA} from '../actions/MessageAction'

 const initialState = {
    value: '',
    all_message: [],
 
}
export function massageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_VALUE_TEXTAREA:
            return { ...state, value: action.payload }
       
        default:
            return state
    }

}