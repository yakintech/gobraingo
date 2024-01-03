import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ColorMatch from './src/games/ColorMatch'
import WorkingMemory from './src/games/WorkingMemory'
import MemoryMatrix from './src/games/MemoryMatrix'

const App = () => {
  return (<>
    <SafeAreaView style={{ flex: 1 }}>
     <MemoryMatrix/>
    </SafeAreaView>
  </>
  )
}

export default App