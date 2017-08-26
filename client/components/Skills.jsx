import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getSkills} from '../actions/skills'

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  componentDidMount() {
    this.props.dispatch(getSkills())
  }
  selectSkills(skill) {
    this.setState({search: skill})
  }
  updateSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }

    //e.preventDefault()

render() {
  let {search} = this.state
  let {skills} = this.props
  //let skills = []
  console.log('eeeerrrr', skills)
  let filteredSkills = skills.filter(({skill}) => skill.toLowerCase().includes(search.toLowerCase()) && skill != search)

  return (
    <div className='form-group'>
        <input type='text' className="form-control" name='search' placeholder='Skill' value={search} onChange={this.updateSearch.bind(this)}/>
        {((filteredSkills.length != 0 && filteredSkills.length != skills.length)|| skills.find(({skill}) => skill == search))
        && filteredSkills.map(({skill}, i) => (
          <p onClick={() => this.selectSkills(skill)} key={i}>{skill}</p>
        ))
      }
    </div>
  )
 }
}
function matchStateToProps(state) {
  return {skills: state.skills}
}

export default connect(matchStateToProps)(Skills)
