export default function resources (state = [{title: "dave", type: 'skill'}], action) {
  switch (action.type) {
    case 'RECEIVE_RESOURCES':
      return action.resources
    default:
      return state
  }
}
