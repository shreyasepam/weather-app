import React from 'react'
import LeftPanel from './components/panels/LeftPanel'
import RightPanel from './components/panels/RightPanel'

export default function WeatherContainer() {
  return (
    <div className='max-w-7xl w-full h-full bg-gray-200 p-8'>
        <div className='w-full h-full bg-white rounded-3xl flex overflow-hidden shadow-xl'>
            <LeftPanel />
            <RightPanel />
        </div>
    </div>
  )
}
