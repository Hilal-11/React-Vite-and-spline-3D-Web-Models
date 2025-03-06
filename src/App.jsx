import React from 'react'
import Model from './Components/Model'
function App() {
  return (
    <div className='bg-slate-950 h-auto text-white px-10 py-10'>
      <h1 className='text-center text-6xl font-bold'>Hello Vite React and 3D Spline Models</h1>

      <div className=' flex justify-evenly py-10 px-10 h-[1000px]'>
        <div className=''>
          <Model />
        </div>
        <div className=''>
          <Model />
        </div>
      </div>
    </div>
  )
}

export default App


