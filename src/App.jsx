import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CookiePlay from './components/CookiePlay'
import './App.css'
import frases from "./assets/data/phrases.json"

function App() {
  const [index, setIndex] = useState(0)
  const [screen, setScreen] = useState(1)
  const changePhrase = () => {
    setIndex(Math.floor(Math.random()*14))
    setScreen(Math.floor(1+Math.random()*4))
  }

  /*const [screen, setScreen] = useState(0)
  const changeScreen = () => {
    setScreen(Math.floor(Math.random()*3))
  }*/
  let urlPic = "/fondo"+screen+".png"
  return (
    <div className="App" style={{backgroundImage: `url(${urlPic})`,  
    backgroundRepeat: "no-repeat"}}>
      <CookiePlay phraseData={frases[index]}/>
      <div className="card">
        <button onClick={changePhrase}>
          Prueba tu suerte
        </button>
      </div>
    </div>
  )
}

export default App
