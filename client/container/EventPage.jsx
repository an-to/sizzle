import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col, Input, Container, FormGroup, FormControl  } from 'react-bootstrap'

import { createEvent } from '../actions/events'
import Logo from '../components/Logo'

export class EventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      date: new Date(),
      is_am: true,
    }
  }

  onChange(e) {
    let value = e.target.value
    if (e.target.name === 'date')
      value = new Date(value)

    this.setState({ [e.target.name]: value })
  }

  onSubmit(e) {
    e.preventDefault()
    let event = {...this.state, user_id: this.props.user.id}
    this.props.dispatch(createEvent(event))
  }

  render() {
    return (
      <div className='event'>
        <Logo />
        <Grid>
          <h2>Start a sizzle</h2>
          <form onSubmit={this.onSubmit.bind(this)}>
            <FormGroup>
              <FormControl type='text' name='title' placeholder='Please enter title' onChange={this.onChange.bind(this)} />
              <FormControl type='text' name='description' placeholder='Please enter description' onChange={this.onChange.bind(this)} />
              <FormControl type="text" name='date' placeholder='DD/MMM/YYYY' onChange={this.onChange.bind(this)} />
              <select name='is_am' onChange={this.onChange.bind(this)}>
                <option value='true'>AM</option>
                <option value='false'>PM</option>
              </select>
              <button type='submit' >Sizzle!</button>
            </FormGroup>
          </form>
            <Link to='/'>
              <button type="button" className="btn btn-primary">Home</button>
            </Link>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(EventPage)
