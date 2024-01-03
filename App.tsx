import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ColorMatch from './src/games/ColorMatch'

const App = () => {
  return (<>
    <SafeAreaView style={{ flex: 1 }}>
      <ColorMatch />
    </SafeAreaView>
  </>
  )
}

export default App