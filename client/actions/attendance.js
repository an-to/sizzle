import request from '../utils/api'

export function postAttendance(attendance) {
  return (dispatch) => {
    request('post','/attendance', attendance)
    .then(res => {
      console.log('posted')
    })
    .catch(err => console.error(err))
  }
}
