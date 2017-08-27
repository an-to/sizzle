import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../components/Logo'
import Quote from '../components/Quote'




export default class EventPage extends React.Component {
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
        <Quote />
      </div>
    )
  }
}
