//import {SET_YEAR} from '../actions/PageActions'
import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,
    SET_TIME,
} from '../actions/PageActions'


const initialState = {
    year: 2018,
    time: '-- -- -- ',
    photos: [],
    isFetching: false,
    error: '',
}
export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TIME:
            return { ...state, time: action.payload }
        
        
            case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, isFetching: true, error: '' }

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, isFetching: false, error: '' }

        case GET_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, isFetching: false }
        default:
            return state
    }

}