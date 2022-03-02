
const URL=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dhaka?key=XUGYEAM5JEZ4DKTFZ8W58T4NW`

export const FETCH_WEATHER_BEGIN   = 'FETCH_WEATHER_BEGIN';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherBegin = () => ({
  type: FETCH_WEATHER_BEGIN
});

export const fetchWeatherSuccess = items => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { items }
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: { error }
});


export function fetchWeather() {
  return dispatch => {
    dispatch(fetchWeatherBegin());
    return fetch(URL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchWeatherSuccess(json));
        // console.log(json)
        return json;
      })
      .catch(error => dispatch(fetchWeatherFailure(error)));
  };
}

export function searchWeather(loc) {
  const search_URL=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?key=XUGYEAM5JEZ4DKTFZ8W58T4NW`
  return dispatch => {
    dispatch(fetchWeatherBegin());
    return fetch(search_URL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchWeatherSuccess(json));
        // console.log(json)
        return json;
      })
      .catch(error => dispatch(fetchWeatherFailure(error)));
  };
}


// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}





