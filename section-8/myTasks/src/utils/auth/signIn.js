async function signIn(){

  setLoad(true)

  if (email.length === 0 || password.length === 0) {
    alert('Please fill in all fields')
    setLoad(false)
    return
  }

  await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((value) => {
      setEmail('')
      setPassword('')
      setLoad(false)
      setUser(value.user.uid)
    }
    ).catch((error) => {
      if (error.code === 'auth/invalid-email') {
        invalidEmail()
        return
      }
      else if (error.code === 'auth/user-not-found') {
        alert('User not found')
        setEmail('')
        setLoad(false)
        return
      }
      else if (error.code === 'auth/wrong-password') {
        alert('Wrong password')
        setPassword('')
        setLoad(false)
        return
      }
      else {
        serverError()
      }
    })
}