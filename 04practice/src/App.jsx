import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState("black")

  return (
    <>
      <div className='min-h-screen w-full flex justify-center items-center bg-[#101210]'>
        <div className='w-full flex flex-wrap justify-center bottom-5 gap-7  m-3 fixed  bottom-10' 
        style={{backgroundColor:"white"}}>
          <button className='rounded-10  gap-10 text-white'
          style={{backgroundColor:"red"}}
          onClick={()=>setColour("red")}>RED</button>

          <button className='rounded-10  gap-10 text-white'
          style={{backgroundColor:"blue"}}
          onClick={()=>setColour("blue")}>blue</button>

          <button className='rounded-10  gap-10 text-white'
          style={{backgroundColor:"brown"}}
          onClick={()=>setColour("brown")}>brown</button>

          <button className='rounded-10  gap-10 text-white'
          style={{backgroundColor:"purple"}}
          onClick={()=>setColour("purple")}>purple</button>

          <button className='rounded-10  gap-10 text-white'
          style={{backgroundColor:"green"}}
          onClick={()=>setColour("green")}>Green</button>

          <button className='rounded-10  gap-10 text-white'
          style={{backgroundColor:"yellow"}}
          onClick={()=>setColour("yellow")}>Yellow</button>

          <button className='rounded-10  gap-10 text-white'
          style={{backgroundColor:"blue"}}
          onClick={()=>setColour("blue")}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App

// // App.jsx
// import { useState } from 'react'

// function App() {
//   const [colour, setColour] = useState('black')

//   return (
//     <div
//       className="min-h-screen w-full flex flex-col items-center justify-center"
//       style={{ backgroundColor: colour }}
//     >
//       <div className="flex flex-wrap gap-4 p-4 bg-white rounded">
//         <button onClick={() => setColour('red')} className="bg-red-500 text-white px-4 py-2 rounded">Red</button>
//         <button onClick={() => setColour('blue')} className="bg-blue-500 text-white px-4 py-2 rounded">Blue</button>
//         <button onClick={() => setColour('green')} className="bg-green-500 text-white px-4 py-2 rounded">Green</button>
//         <button onClick={() => setColour('yellow')} className="bg-yellow-400 text-black px-4 py-2 rounded">Yellow</button>
//       </div>
//     </div>
//   )
// }

// export default App
