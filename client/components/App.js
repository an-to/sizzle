import React from 'react'
import Quote from './Quote'
import Navbar from '../components/Navbar'
import DataEntryPage from '../container/DataEntryPage'
import LoginPage from '../container/LoginPage'
import {HashRouter as Router, Route} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/data' component={DataEntryPage}/>
        <div className='quote'>
          <Navbar />
          <Quote/>
        </div>
      </div>
      </Router>
  )
}

export default App
