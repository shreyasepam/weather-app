import { combineReducers } from "redux";
import weatherReducer from "./slice/weatherSlice";
import weatherSearchReducer from "./slice/weatherSearchSlice";

export default combineReducers({
  weather: weatherReducer,
  weatherSearch: weatherSearchReducer
});
