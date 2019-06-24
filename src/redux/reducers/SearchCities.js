import {
  FETCH_SEARCH_DATA,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE
} from '../actions/actionTypes';

const initialState = { payload: [], isLoading: false, error: {} };

export default function searchCitiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_DATA:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isLoading: false
      };
    case FETCH_SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}
