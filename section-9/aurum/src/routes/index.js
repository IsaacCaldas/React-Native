import { useContext } from 'react'
import { ActivityIndicator } from 'react-native'

import { AuthContext } from '../contexts/auth'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { Container } from '../styles/styleds'

export default function Routes() {
  const { signed, load } = useContext(AuthContext)
  
  if (load) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#2aa444" />
      </Container>
    )
  }

  return signed ? <AppRoutes/> : <AuthRoutes/> 
}