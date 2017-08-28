import request from '../utils/api'

export const recieveResource = (resources) => {
  return {type: 'GET_RESOURCE', resources}
}

export function getResource() {
  return (dispatch) => {
    request('get','/resources')
    .then(res => {
      dispatch(receiveLocations(res.body))
    })
    .catch(err => console.error(err))

  }
}
