import React from 'react'
import { Grid, Row, Col, Input, Container } from 'react-bootstrap'


export default class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  onDeleteLinkClicked() {
    this.props.dispatch(removeEvent(this.props.event))
  }

  render() {
    let event = this.props.event
    return (
      <Row>
        <div className='event'>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
        {'     '}
        <a onClick={this.onDeleteLinkClicked.bind(this)}>Delete</a>
      </Row>
    )
  }
}
