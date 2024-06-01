import { useContext } from 'react'
import './App.css'
import Data from './Component/Data'
import { ThemeContext } from './Context/ThemeContext'
import ThemeButtonContext from './Context/ThemeButtonContext'


function App() {
  
  const {theme,Toggletheme}=useContext(ThemeContext)
  

  return (
    <>

      <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white",border:"2px solid red",margin:"20px"}}> 
      <h1>Hello</h1>
      <Data/>
      <ThemeButtonContext/><br /><br />
      </div>
      
    </>
  )
}

export default App
