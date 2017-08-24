import React from 'react'
import Navbar from './Navbar'
import Quote from './Quote'
import Logo  from './Logo'

const App = () => {
  return (
    <div>
      <h1>Quotes</h1>
      <Logo />
      <Navbar />
      <div className='quote'>
        <Quote />
      </div>
    </div>
  )
}

export default App
