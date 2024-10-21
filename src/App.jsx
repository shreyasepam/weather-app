import { Provider } from "react-redux";
import "./App.css";
import WeatherContainer from "./WeatherContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="h-dvh flex bg-gray-200 justify-center">
        <WeatherContainer />
      </div>
    </Provider>
  );
}

export default App;
