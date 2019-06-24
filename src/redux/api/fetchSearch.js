import {
  fetchSearchData,
  fetchSearchSuccess,
  fetchSearchFailure
} from '../actions/index';

function fetchSearch(query) {
  return dispatch => {
    dispatch(fetchSearchData());
    fetch('https://www.metaweather.com/api/location/search/?query=' + query)
      .then(response => response.json())
      .then(responseJson => {
        let result = responseJson;
        dispatch(fetchSearchSuccess(result));
        return result;
      })
      .catch(error => {
        dispatch(fetchSearchFailure(error));
        console.error(error);
      });
  };
}

export default fetchSearch;
