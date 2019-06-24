import * as actionTypes from './actionTypes';

// Actions to Store all Cities
export const addCity = cityFullInfo => ({
  type: actionTypes.ADD_CITY,
  cityFullInfo: cityFullInfo
});

export const removeCity = id => ({
  type: actionTypes.REMOVE_CITY,
  id: id
});


// Actions to Fetch weather of a city
export const fetchWeatherPending = () => {
  return {
    type: actionTypes.FETCH_CURRENT_WEATHER_PENDING
  };
};

export const fetchWeatherSuccess = currentWeather => {
  return {
    type: actionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
    currentWeather: currentWeather
  };
};

export const fetchWeatherError = error => {
  return {
    type: actionTypes.FETCH_CURRENT_WEATHER_ERROR,
    error: error
  };
};

// Actions to Search Data
export const fetchSearchData = () => {
  return {
    type: actionTypes.FETCH_SEARCH_DATA
  };
};

export const fetchSearchSuccess = result => {
  return {
    type: actionTypes.FETCH_SEARCH_SUCCESS,
    payload: result
  };
};

export const fetchSearchFailure = error => {
  return {
    type: actionTypes.FETCH_SEARCH_FAILURE,
    error: error
  };
};
