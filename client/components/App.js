import React from 'react'
import Navbar from '../components/Navbar'
// import DataEntryPage from '../container/DataEntryPage'
import LoginPage from '../container/LoginPage'
// import EventPage from '../container/EventPage'
import {HashRouter as Router, Route} from 'react-router-dom'
import MainPage from './MainPage'
import MakeResource from './MakeResource'


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/MakeResource' component={MakeResource}/>
        <div className='quote'>
          <Navbar />
        </div>
      </div>
      </Router>
  )
}

export default App
