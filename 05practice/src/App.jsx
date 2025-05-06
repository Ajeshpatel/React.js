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
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto shadow-md rounded-lg px-4 sm:px-6 md:px-8 py-3 my-2 text-orange-500 bg-gray-800">
        <h1 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-semibold my-6">Password Generator</h1>
        <div className='flex w-full shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} 
          placeholder='password' readOnly
          ref={passwordRef}
          className="outline-none bg-white w-full py-2 px-3 rounded-l" 
          />
          <button className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-r"
          onClick={copyPasswordToClipboard}>copy</button>
        </div>

        <div className='flex flex-col sm:flex-row text-sm gap-3 sm:gap-x-4 items-start sm:items-center pb-4'>
          <div className='flex items-center gap-x-2'>
            <input type='range' min={6} max={100} value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-2'>
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
