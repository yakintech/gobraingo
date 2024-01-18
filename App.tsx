import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AuthProvider } from './src/context/AuthContext'
import Start from './src/Start'
import { UserProvider } from './src/context/UserContext'
import ContactsList from './src/reactNativeSamples/ContactsList'
import AddNewcontact from './src/reactNativeSamples/AddNewcontact'
import ImageGallery from './src/reactNativeSamples/ImageGallery'
import ReactNativeReadFile from './src/reactNativeSamples/ReactNativeReadFile'
import messaging from '@react-native-firebase/messaging';
import { Button, List, Modal, PaperProvider, Portal } from 'react-native-paper'


const App = () => {

  useEffect(() => {
    requestUserPermission();
  }, []);

  return <ModalSample/>



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



async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}




function ProductsScreen() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then(response => response.json())
      .then(json => setproducts(json))
  })

  return <>
    <ScrollView>
      {
        products.map((product: any) => {
          return <List.Item
            title={product.name}
            description={product.unitPrice}
            left={props => <List.Icon {...props} icon="folder" />}
          />
        })
      }
    </ScrollView>

  </>

}



function ModalSample(){

  const [isShow, setisShow] = useState(false)

  const containerStyle = {backgroundColor: 'white', padding: 20};


  return (
    <PaperProvider>
      <Portal>
        <Modal visible={isShow} onDismiss={() => setisShow(false)} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={() => setisShow(true)}>
        Show
      </Button>
    </PaperProvider>
  );

}