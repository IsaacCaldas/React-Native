import { useContext } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { AuthContext } from '../../contexts/auth'
import { HeaderApp, HeaderText } from './styles'

export default function Header() {

  const { signOut } = useContext(AuthContext)

  return (
    <HeaderApp>
      <HeaderText>Welcome to Aurum</HeaderText>
      <AntDesign
        name="logout"
        size={18}
        color="#ed0c0c"
        onPress={() => signOut()}
      />
    </HeaderApp>
  )
}