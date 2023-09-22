import React from 'react'
import './app.css'
import Header from '../header/header'
import Experience from '../experience/experience'
import Education from '../education/education'
import Skills from '../skills/skills'
import Contactme from '../contactme/contactme'


const App = () => {
  return (
    <div>
      <div><Header /></div>
      <div><Experience /></div>
      <div><Education /></div>
      <div><Skills /></div>
      <div><Contactme /></div>
    </div>
  )
}

export default App