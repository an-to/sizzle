import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Ingredients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  // componentDidMount() {
  //   this.props.dispatch(getIngredients())
  // }
  selectIngredient(ingredient) {
    this.setState({search: ingredient})
  }
  updateSearch(e) {
    this.setState({[e.target.name]: e.target.value})
  }

    //e.preventDefault()

render() {
  let {search} = this.state
  // let {ingredients} = this.
  let ingredients = [
    {ingredient: 'Meat'}
  ]
  let filteredIngredients = ingredients.filter(({ingredient}) => ingredient.toLowerCase().includes(search.toLowerCase()) && ingredient != search)
  console.log({ingredients, filteredIngredients});
  return (
    <div className='form-group'>
        <input type='text' className="form-control" name='search' value={search} onChange={this.updateSearch.bind(this)}/>
        {((filteredIngredients.length != 0 && filteredIngredients.length != ingredients.length)|| ingredients.find(({ingredient}) => ingredient == search))
        && filteredIngredients.map(({ingredient}, i) => (
          <p onClick={() => this.selectIngredient(ingredient)} key={i}>{ingredient}</p>
        ))
      }
      <Link to="/">Go Home</Link>
    </div>
  )
 }
}


export default Ingredients
