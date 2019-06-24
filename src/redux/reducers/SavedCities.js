import {
  ADD_CITY,
  REMOVE_CITY
} from '../actions/actionTypes';

export default function savedCitiesReducer(state = [], action) {
  switch (action.type) {
    case ADD_CITY:
      return [...state, (cityFullInfo = action.cityFullInfo)];
    case REMOVE_CITY:
      return state.filter(item => item != state[action.id]);

    default:
      return state;
  }
}
