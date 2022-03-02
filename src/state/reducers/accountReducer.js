import {
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "../action-creator/index";

const initialState = {
  items: [],
  loading: false,
  error: null,
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case FETCH_WEATHER_FAILURE:
     
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
};

export default reducer;
