import axios from "../axios";

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_WEATHER_REQUEST" });
    try {
      const response = await axios.get(`/forecast.json?q=auto:ip&days=2`);
      dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
    }
  };
};

const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return { ...state, loading: true };
    case "FETCH_WEATHER_SUCCESS":
      return { ...state, loading: false, weatherData: action.payload };
    case "FETCH_WEATHER_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
