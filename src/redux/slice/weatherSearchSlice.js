import axios from "../axios";

export const weatherSearch = (query) => {
  return async (dispatch) => {
    dispatch({ type: "WEATHER_INPUT_REQUEST" });
    try {
      const response = await axios.get(`/search.json?q=${query}`);
      dispatch({ type: "WEATHER_INPUT_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "WEATHER_INPUT_FAILURE", payload: error.message });
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
    case "WEATHER_INPUT_TEXT":
      return { ...state, input: action.payload };
    case "WEATHER_INPUT_REQUEST":
      return { ...state, loading: true };
    case "WEATHER_INPUT_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "WEATHER_INPUT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "WEATHER_INPUT_CURRENT":
      return {
        ...state,
        loading: false,
        current: action.payload,
        input: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
