import {
  fetchWeatherPending,
  fetchWeatherSuccess,
  fetchWeatherError,
  addCity
} from '../actions/index';
import moment from 'moment';

function fetchWeather(weatherId) {
  return dispatch => {
    dispatch(fetchWeatherPending());
    // NOTE: Meta Weather Public API
    fetch('https://www.metaweather.com/api/location/' + weatherId)
      .then(response => response.json())
      .then(responseJson => {
        let CurrentTemp = responseJson;
        const currentDate = moment().format('YYYY-MM-DD');
        const SevenDayForcast = [];
        for (let a = 1; a <= 7; a++) {
          const date = moment(currentDate, 'YYYY-MM-DD')
            .add(a, 'days')
            .format('YYYY/MM/DD');
          fetch(
            'https://www.metaweather.com/api/location/' +
              CurrentTemp.woeid +
              '/' +
              date
          )

            .then(response => response.json())
            .then(responseJson => {
              SevenDayForcast.push(responseJson[0]);

              // NOTE: Sorted because api result come in random
              SevenDayForcast.sort((a, b) => {
                let dateA = new Date(a.applicable_date);
                let dateB = new Date(b.applicable_date);
                return dateA - dateB;
              });
            })
            .catch(error => {
              dispatch(fetchWeatherError(error));
            });
        }

        dispatch(fetchWeatherSuccess({ CurrentTemp, SevenDayForcast }));
        dispatch(addCity({ CurrentTemp, SevenDayForcast }));
        return SevenDayForcast;
      })
      .catch(error => {
        dispatch(fetchWeatherError(error));
        console.error(error);
      });
  };
}

export default fetchWeather;
