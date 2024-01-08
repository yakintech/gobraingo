import { View, Text, Pressable, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext, AuthContextType } from '../context/AuthContext'
import { authStorageHelper } from '../utils/storageHelper'

const HomeScreen = ({ navigation }: any) => {

    const { logout } = useContext(AuthContext) as AuthContextType

    const signout = () => {

        authStorageHelper.removeLoginStorage()
            .then((res) => {  
                navigation.navigate('Auth')
                logout()
            })
    }

    return (<>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>

            <Pressable style={{ width: '40%', height: 200, borderStyle: 'solid', borderWidth: 2 }} onPress={() => navigation.navigate('ColorMatch')}>
                <View>
                    <Text>Color Match</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('MemoryMatrix')} style={{ width: '40%', height: 200, borderStyle: 'solid', borderWidth: 2 }}>
                <View>
                    <Text>Memory Matrix</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('WorkingMemory')} style={{ width: '40%', height: 200, borderStyle: 'solid', borderWidth: 2 }}>
                <View>
                    <Text>Working Memory</Text>
                </View>
            </Pressable>

        </View>

        <Button title="Signout" onPress={signout} ></Button>
    </>
    )
}

export default HomeScreen