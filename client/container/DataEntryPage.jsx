import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../components/Logo'
import Ingredients from '../components/Ingredients'
import Skills from '../components/Skills'
import Locations from '../components/Locations'

export default class DataEntryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div>
        <Logo />
        <Ingredients />
        <Skills />
        <Locations />
        <Link to='/'>
           <button type="button" className="btn btn-primary">Home</button>
         </Link>
      </div>
    )
  }
}
