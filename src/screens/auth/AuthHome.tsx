import { View, Text, Pressable } from 'react-native'
import React from 'react'

const AuthHome = ({navigation} : any) => {
  return ( <>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <Text>Üye Ol</Text>
            </Pressable>
            <Text>veya</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
                <Text>Giriş Yap</Text>
            </Pressable>
        </View>
   </>
  )
}

export default AuthHome