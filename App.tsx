import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from './src/context/AuthContext'
import Start from './src/Start'

const App = () => {
  return (<>
    <AuthProvider>
      <Start/>
    </AuthProvider>
  </>
  )
}

export default App