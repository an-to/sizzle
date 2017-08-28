import request from '../utils/api'


export const receiveResources = (resources) => {
  return {type: 'RECEIVE_RESOURCES', resources}
}
export function getResources() {
  return (dispatch) => {
    request('get','/resources')
    .then(res => {
      dispatch(receiveResources(res.body))
    })
    .catch(err => console.error(err))
  }
}
