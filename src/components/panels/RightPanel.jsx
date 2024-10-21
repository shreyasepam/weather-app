import React from 'react'
import DayView from '../DayView'
import Input from '../Input'

export default function RightPanel() {
  return (
   <div className='w-4/6 h-full bg-gray-100 p-8'>
    <Input />
    <div className='w-full flex gap-4 mt-6'>
      {Array(5).fill().map(x => <DayView day="sun" temperature={"400.c"} />)}
      </div>
   </div>
  )
}
