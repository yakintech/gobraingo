import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { AuthProvider } from './src/context/AuthContext'
import Start from './src/Start'
import { UserProvider } from './src/context/UserContext'
import ContactsList from './src/reactNativeSamples/ContactsList'
import AddNewcontact from './src/reactNativeSamples/AddNewcontact'
import ImageGallery from './src/reactNativeSamples/ImageGallery'
import ReactNativeReadFile from './src/reactNativeSamples/ReactNativeReadFile'


const App = () => {

  return <SafeAreaView style={{flex:1}}>

    <ReactNativeReadFile />
  

  </SafeAreaView>


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