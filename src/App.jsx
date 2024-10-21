import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherContainer from './WeatherContainer'

function App() {
  return (
    <div className="w-svw h-svh flex bg-gray-200 justify-center">
      <WeatherContainer />
    </div>
  )
}

export default App
