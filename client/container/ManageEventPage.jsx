import React from 'react'
import Redux from 'redux'
import {Link} from 'react-router-dom'
import Logo from '../components/Logo'
import {connect} from 'react-redux'
import Resources from '../components/MakeResource'

export class ManageEventPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Resources: ''
    }
  }

  render() {
    return (
      <div>
        <Logo />
        <Resources />
        <Link to='/'>
           <button type="button" className="btn btn-primary">Home</button>
         </Link>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    resources: [{id: 1 , user_id:1  , title: 'apples'}, {id: 2 , user_id:2  , title: 'walnuts'}, {id: 3 , user_id:3  , title: 'butter'}],
    locations: [{id: 4 , user_id:4 , title: 'strathmore'}, {id: 5 , user_id:5 , title: 'newtown'}, {id:6 , user_id:6, title: 'johnsonville'}],
    skills: [{id:7 , user_id:7 , title: 'baker'}, {id:8 , user_id:8 , title: 'masterchef'}, {id:9 , user_id:9 , title: 'kitchenhand'}]
  }
}

export default connect(mapStateToProps)(ManageEventPage)
