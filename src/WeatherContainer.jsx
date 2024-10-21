import React, { useEffect } from 'react'
import LeftPanel from './components/panels/LeftPanel'
import RightPanel from './components/panels/RightPanel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from './redux/slice/weatherSlice';

export default function WeatherContainer() {
    const weatherData = useSelector(state => state.weather);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWeather());
    },[]);

    console.log("myWarether", weatherData)

  return (
    <div className='max-w-7xl w-full h-full p-8'>
        <div className='w-full bg-gray-100  rounded-3xl flex overflow-hidden shadow-xl'>
            <LeftPanel />
            <RightPanel />
        </div>
    </div>
  )
}
 