import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import getResource from '../actions/getResource'

class MakeResource extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      resource: [
        'resource', 'skill', 'location'
      ],
      showOptions: false
    }
  }
  componentDidMount() {
    this.props.dispatch(getResource())
  }
  render() {
    return (
      <div>
        <h1>Make Resource</h1>

      </div>
    )
  }
}

function matchStateToProps(state) {
  return {resource: state.resource}
}

export default connect(matchStateToProps)(MakeResource)
