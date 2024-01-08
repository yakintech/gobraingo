import { View, Text, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext, UserContextType } from '../context/UserContext'

const ColorMatch = () => {

    const [points, setpoints] = useState(0)
    const [random1, setrandom1] = useState("")
    const [random2, setrandom2] = useState("")
    const [random3, setrandom3] = useState("black")
    const [counter, setcounter] = useState(0)

    const { totalPoints, setTotalPoints } = useContext(UserContext) as UserContextType



    let colors = ["red", "blue", "orange", "black"]

    const trueButton = () => {
        if (random3 === random1)
            setpoints(points + 1)


        randomGenerator()
        setcounter(counter + 1)
        if (counter === 10) {
            setTotalPoints(totalPoints + points)
            setpoints(0)
        }
    }


    const falseButton = () => {
        if (random3 !== random1)
            setpoints(points + 1)
        randomGenerator()
        setcounter(counter + 1)
        if (counter === 10) {
            setTotalPoints(totalPoints + points)
            setpoints(0)
        }
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
        <Text style={{ fontSize: 55, textAlign: 'center' }}>Oyun: {points}</Text>
        <Text style={{ fontSize: 55, textAlign: 'center' }}>Toplam: {totalPoints}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' }}>
            <View style={{ borderStyle: 'solid', borderWidth: 2, width: '40%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 35, fontWeight: '600' }}>{random1}</Text>
            </View>
            <View style={{ borderStyle: 'solid', borderWidth: 2, width: '40%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 35, fontWeight: '600', color: random3 }}>{random2}</Text>
            </View>
        </View>

        {
            counter <= 10 ? <><View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Button onPress={falseButton} title='YANLIŞ'></Button>
                <Button onPress={trueButton} title='DOĞRU'></Button>
            </View></>
                : <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Oyun Bitti</Text>
                </View>
        }
        <Button title='Yenile' onPress={() => setcounter(0)}></Button>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Süre: 00:45</Text>
        </View>

    </>
    )
}

export default ColorMatch