import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from './src/context/AuthContext'
import Start from './src/Start'
import { UserProvider } from './src/context/UserContext'

const App = () => {
  return (<>
    <AuthProvider>
      <UserProvider>
        <Start />
      </UserProvider>
    </AuthProvider>
  </>
  )
}

export default App