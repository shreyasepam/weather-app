import axios from "axios";

console.log("asdasdasdasd", import.meta.env.VITE_WEATHER_BASE_URL);


export default axios.create({
    baseURL:import.meta.env.VITE_WEATHER_BASE_URL,
    headers:{
        key:import.meta.env.VITE_WEATHER_KEY
    }
})