import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const ColorMatch = () => {

    const [points, setpoints] = useState(0)
    const [random1, setrandom1] = useState("")
    const [random2, setrandom2] = useState("")
    const [random3, setrandom3] = useState("black")



    let colors = ["red", "blue", "orange", "black"]

    const trueButton = () => {
        if (random3 === random1)
            setpoints(points + 1)


        randomGenerator()
    }


    const falseButton = () => {
        if (random3 !== random1)
            setpoints(points + 1)
        randomGenerator()
    }



    useEffect(() => {
        randomGenerator()
    }, [])

    const randomGenerator = () => {
        let r1 = Math.floor(Math.random() * colors.length)
        let r2 = Math.floor(Math.random() * colors.length)
        let r3 = Math.floor(Math.random() * colors.length)
        setrandom1(colors[r1])
        setrandom2(colors[r2])
        setrandom3(colors[r3])
    }


    return (<>
        <Text style={{ fontSize: 55, textAlign: 'center' }}>{points}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' }}>
            <View style={{ borderStyle: 'solid', borderWidth: 2, width: '40%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 35, fontWeight: '600' }}>{random1}</Text>
            </View>
            <View style={{ borderStyle: 'solid', borderWidth: 2, width: '40%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 35, fontWeight: '600', color: random3 }}>{random2}</Text>
            </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Button onPress={falseButton} title='YANLIŞ'></Button>
            <Button onPress={trueButton} title='DOĞRU'></Button>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Süre: 00:45</Text>
        </View>

    </>
    )
}

export default ColorMatch