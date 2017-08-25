import request from 'superagent'

export const receiveIngredients = (ingredients) => {
  return {type: 'GET_INGREDIENTS', ingredients}
}

export function getGreetings() {
  return (dispatch) => {
    request.get(`/api/ingredients`).end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveIngredients(res.body))
    })
  }
}
