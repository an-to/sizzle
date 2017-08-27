import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../components/Logo'
import Info from '../components/Info'


export default class LoginPage extends React.Component {
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
        <Info />
        <LoginForm />
      </div>
    )
  }
}
