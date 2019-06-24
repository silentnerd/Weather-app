import {
  FETCH_CURRENT_WEATHER_PENDING,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_ERROR
} from '../actions/actionTypes';

const initialState = {
  pending: false,
  currentWeather: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        pending: false,
        currentWeather: action.currentWeather
      };
    case FETCH_CURRENT_WEATHER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
