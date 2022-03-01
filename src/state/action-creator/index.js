
const URL=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dhaka?key=XUGYEAM5JEZ4DKTFZ8W58T4NW`
export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch(URL)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json));
        //   console.log(json.address)
          return json;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = items => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { items }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});





