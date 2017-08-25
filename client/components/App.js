import React from 'react'
import Navbar from './Navbar'
import Quote from './Quote'
import Logo from './Logo'
import Info from './Info'
import DataEntryPage from '../container/DataEntryPage'
import {HashRouter as Router, Route} from 'react-router-dom'
// import DataEntryPage from './DataEntryPage'

const App = () => {
  return (
    <Router>

      <div>
        <Route exact path='/data' component={DataEntryPage}/>
        <Logo/>
        <Info/>
        <Navbar/>
        <div className='quote'>
          <Quote/>
        </div>

      </div>
      </Router>
  )
}

export default App
