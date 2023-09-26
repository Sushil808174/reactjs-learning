import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#81D4FA')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py1 rounded-full bg-red-500 shadow-lg' onClick={()=>setColor('red')}>Red</button>
            <button className='outline-none px-4 py1 rounded-full bg-green-500 shadow-lg' onClick={()=>setColor('green')}>Green</button>
            <button className='outline-none px-4 py1 rounded-full bg-blue-500 shadow-lg' onClick={()=>setColor('blue')}>Blue</button>
            <button className='outline-none px-4 py1 rounded-full bg-teal-500 shadow-lg' onClick={()=>setColor('teal')}>Teal</button>
          </div>
      </div>
    </div>
  )
}

export default App
