import React from 'react'
import { Grid, Row, Col, Input, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

 export class ManageResources extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    // let resources = this.props.resources
    return (
      <div>
        {this.props.resources.map((resource, i) => {
          return (
            <div key={i}>
              <h1>{resource.title}</h1>
              <h1>{resource.type}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resources: state.resources
  }
}

export default connect(mapStateToProps)(ManageResources)
