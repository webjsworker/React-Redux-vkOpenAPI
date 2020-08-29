import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/UserActions'


const initialState ={
    name:'Anonim',
    error:'',
    isFetching: false,
}
export function userReducer(state = initialState, action){
    switch (action.type) {
        case LOGIN_REQUEST:
            return{...state, isFetching: true, error:''}
        case LOGIN_SUCCESS:
            return{...state, isFetching: true, error:action.payload.message}     
    default:
        return state
        }
    
    
}