function ingredients (state = [], action) {
  switch (action.type) {
    case 'GET_INGREDIENTS':
      return [...action.ingredients]
    default:
      return state
  }
}

export default ingredients
