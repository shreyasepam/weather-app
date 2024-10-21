import axios from "../axios";

export const fetchWeather = (query) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_WEATHER_REQUEST" });
    try {
      const response = await axios.get(`/forecast.json?q=${query}&days=5`);
      dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
    }
  };
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return { ...state, loading: true };
    case "FETCH_WEATHER_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_WEATHER_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
