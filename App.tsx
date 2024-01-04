import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ColorMatch from './src/games/ColorMatch'
import WorkingMemory from './src/games/WorkingMemory'
import MemoryMatrix from './src/games/MemoryMatrix'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import AuthStack from './src/screens/auth'
import { authStorageHelper } from './src/utils/storageHelper'

const Stack = createNativeStackNavigator();


const App = () => {

  const [isLogin, setisLogin] = useState(false)
  const [loading, setloading] = useState(true)

  useEffect(() => {

    authStorageHelper.getLoginStorage()
      .then((res) => {
        setisLogin(res)
        setloading(false)
      }
      )

  }, [])


  return (<>
    {
      loading ? <View><Text>Loading</Text></View> :
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              {
                !isLogin ? <Stack.Screen
                  name='Auth'
                  component={AuthStack}
                /> : null
              }
              <Stack.Screen
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen
                name="ColorMatch"
                component={ColorMatch}
              />
              <Stack.Screen
                name="MemoryMatrix"
                component={MemoryMatrix}
              />
              <Stack.Screen
                name="WorkingMemory"
                component={WorkingMemory}
              />

            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
    }
  </>
  )
}

export default App