const auth = (state = {}, action) => {
  switch (action.type) {
    case 'VERIFY_AUTH':
      console.log('NO REDUCER', action.auth)
      return action.auth
    default:
      return state
  }
}

export default auth