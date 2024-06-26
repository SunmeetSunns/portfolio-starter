import React from 'react'
import './FloatingDiv.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function FloatingDiv({image,txt1,txt2}) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div className="floatingdiv">
    <img src={image}/>
    <span  style={darkMode ? {color:'black'}:{color:'var(--black)'}} >{txt1} <br/>{txt2}</span>
  </div>
  )
}

export default FloatingDiv