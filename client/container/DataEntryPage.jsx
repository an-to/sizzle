import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './components/Logo'
import Ingredients from './components/Ingredients'

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
        <Ingredient />
      </div>
    )
  }
}
