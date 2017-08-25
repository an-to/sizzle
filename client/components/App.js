import React from 'react'
import Navbar from './Navbar'
import Quote from './Quote'
import Logo from './Logo'
import Info from './Info'

const App = () => {
  return (
    <div>
      <Logo/>
      <Info/>
      <Navbar/>
      <div className='quote'>
        <Quote/>
      </div>
    </div>
  )
}

export default App
