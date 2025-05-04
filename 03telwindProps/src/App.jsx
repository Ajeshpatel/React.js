import './App.css'
import Card from "./Card"

function App() {

  return (
    <>
      <h1 class="text-3xl font-bold underline text-clifford text-black">
      Hello world!
      </h1>
      <Card username="chai aur React" userposition = "software engineer"/>
      <Card username="react aur chai" userposition = "Full stack Developer"/>
      <Card/>
      
    </>
  )
}

export default App
