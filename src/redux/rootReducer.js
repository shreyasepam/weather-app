import { combineReducers } from "redux";
import weatherReducer from "./slice/weatherSlice";

export default combineReducers({
  weather: weatherReducer,
});
