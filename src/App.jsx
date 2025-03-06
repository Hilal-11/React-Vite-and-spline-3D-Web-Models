import React from 'react'
import Model from './Components/Model'
import Model2 from './Components/Model2'
import Desktop from './Components/Desktop'
function App() {
  return (
    <div className='bg-slate-950 h-auto text-white px-10 py-10'>
      <h1 className='text-center text-6xl font-bold'>Hello Vite React and 3D Spline Models</h1>

      <div className='  py-10 px-10 h-auto'>

        <div className=''>
          <Model />
        </div>
        <div>
          <Model2 />
        </div>
    
      </div>
    </div>
  )
}

export default App


