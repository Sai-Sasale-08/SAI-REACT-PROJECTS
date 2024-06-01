import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeButtonContext = () => {

    const {theme,Toggletheme}=useContext(ThemeContext)


  return (
    <div>
      <button onClick={Toggletheme}>Theme Is {theme}</button>
    </div>
  )
}

export default ThemeButtonContext
