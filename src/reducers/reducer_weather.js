import {FETCH_WEATHER} from '../actions/index';

export default function WeatherReducer(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //... is ES6 syntax : allows to flatten an array
            return [action.payload.data, ...state];
        default:
            return state;
    }
}