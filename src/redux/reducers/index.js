import { combineReducers } from 'redux';
import savedCitiesReducer from './SavedCities';
import FetchWeatherListsReducer from './currentWeatherReducer';
import FetchSearchCitiesReducer from './SearchCities';

const allReducers = combineReducers({
  savedCities: savedCitiesReducer,
  weatherLists: FetchWeatherListsReducer,
  searchCities: FetchSearchCitiesReducer
});

export default allReducers;
