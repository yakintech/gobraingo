import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ColorMatch from './src/games/ColorMatch'
import WorkingMemory from './src/games/WorkingMemory'

const App = () => {
  return (<>
    <SafeAreaView style={{ flex: 1 }}>
      <WorkingMemory/>
    </SafeAreaView>
  </>
  )
}

export default App