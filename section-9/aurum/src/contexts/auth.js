import { useState, createContext } from "react"

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Isaac'
  })

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}
