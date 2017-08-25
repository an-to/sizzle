import React from 'react'
import {Grid,Row,Col,Input,Container} from 'react-bootstrap'

  const Info = () => {
    return (
      <div>

        <Grid  className="Info">
          <Row>
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <h1>Info</h1>
            </Col>
            <Col xs={1} md={4}></Col>
          </Row>
        </Grid>

      </div>
    )
  }
  export default Info
