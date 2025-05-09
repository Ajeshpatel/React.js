import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    };
    if(charAllowed){
      str += "!@#$%^&*`~(){}[]"
    };

    for(let i =1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])  
  //useCallback ,for memorize or optimization to function

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // select entire range
    passwordRef.current?.setSelectionRange(0,999) //optional, for selection range,
    window.navigator.clipboard.writeText(Password)
  }, 
[Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className=" text-center text-white my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} 
          placeholder='password' readOnly
          ref={passwordRef}
          className=' outline-none bg-white w-full py-1 px-3 my-2 rounded-l' 
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-1 my-2 rounded-r shrink-0'
          onClick={copyPasswordToClipboard}>copy</button>
        </div>

        <div className='flex text-sm gap-x-2 pb-3'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} id='characterInput'
            onChange={()=>{
              setCharAllowed((prev)=> !prev);
            }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
