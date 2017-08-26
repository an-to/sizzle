import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getLocation} from '../actions/locations'

class Locations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  componentDidMount() {
    this.props.dispatch(getLocation())
  }
  selectLocation(location) {
    this.setState({search: location})
  }
  updateSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }

    //e.preventDefault()

render() {
  let {search} = this.state
  let {locations} = this.props
  // let locations = [
  //   {location: 'Meat'}
  // ]


  let filteredLocations =  locations.filter(({location}) => location.toLowerCase().includes(search.toLowerCase()) && location != search)
  return (
    <div className='form-group'>
        <input type='text' className="form-control" name='search' value={search} onChange={this.updateSearch.bind(this)}/>
        {((filteredLocations.length != 0 && filteredLocations.length != locations.length)|| locations.find(({location}) => location == search))
        && filteredLocations.map(({location}, i) => (
          <p onClick={() => this.selectLocation(location)} key={i}>{location}</p>
        ))
      }
      <Link to="/">Go Home</Link>
    </div>
  )
 }
}
function matchStateToProps(state) {

  return {locations: state.locations}
}

export default connect(matchStateToProps)(Locations)
