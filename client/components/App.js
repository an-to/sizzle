import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Navbar from '../components/Navbar'
import DataEntryPage from '../container/DataEntryPage'
import LoginPage from '../container/LoginPage'
import EventPage from '../container/EventPage'
import EventList from '../container/EventList'


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/data' component={DataEntryPage}/>
        <Route exact path='/event' component={EventPage}/>
        <Route exact path='/eventlist' component={EventList}/>
        <div className='quote'>
          <Navbar />
        </div>
      </div>
      </Router>
  )
}

export default App
