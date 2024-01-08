import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { authStorageHelper } from '../../utils/storageHelper'
import { AuthContext, AuthContextType } from '../../context/AuthContext'

const LoginScreen = ({navigation} : any) => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const { login:contextLogin } = useContext(AuthContext) as AuthContextType


  const login = () => {
    

    if (email.toLowerCase() == "cagatay@mail.com" && password == "123") {

      authStorageHelper.setLoginStorage(true)
        .then(() => {
          contextLogin()
        })
    }
    else {
      console.log("Giris Basarisiz")
    }
  }



  return (<>
    <View>
      <TextInput
        value={email}
        onChangeText={setemail}
        style={styles.input}
        placeholder='Email'
        autoCapitalize='none'
        
      />
    </View>
    <View>
      <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={setpassword}
        style={styles.input}
        placeholder='Password'

      />
    </View>
    <Button onPress={login} title="Login"></Button>
  </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});