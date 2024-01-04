import { View, Text, Pressable } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }: any) => {
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
    </>
    )
}

export default HomeScreen