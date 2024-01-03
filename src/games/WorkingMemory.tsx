import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const WorkingMemory = () => {

    let materials = ["star", "square", "circle", "cube", "pyramid"]
    const [random1, setrandom1] = useState("")
    const [random2, setrandom2] = useState("")
    const [random3, setrandom3] = useState("")

    const [points, setpoints] = useState(0)

    useEffect(() => {
        randomGenerator()

    }, [])

    const randomGenerator = () => {
        let r1 = Math.floor(Math.random() * materials.length)
        let r2 = Math.floor(Math.random() * materials.length)
        let r3 = Math.floor(Math.random() * materials.length)
        setrandom1(materials[r1])
        setrandom2(materials[r2])
        setrandom3(materials[r3])
    }

    const include = () => {
        if (random1 === random3 || random2 === random3)
            setpoints(points + 1)

        next();
    }

    const exclude = () => {
        if (random1 !== random3 && random2 !== random3)
            setpoints(points + 1)

        next();
    }


    const next = () => {
        setrandom1(random2)
        setrandom2(random3)

        let r3 = Math.floor(Math.random() * materials.length)
        setrandom3(materials[r3])
    }


    return (<>
        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20, alignItems: 'center' }}>

            <View style={{ height: 100, borderStyle: 'solid', borderWidth: 2, width: '20%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{random1}</Text>
            </View>
            <View style={{ height: 100, borderStyle: 'solid', borderWidth: 2, width: '20%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{random2}</Text>
            </View>
            <View style={{ height: 100, borderStyle: 'solid', borderWidth: 2, width: '20%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{random3}</Text>
            </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Button onPress={exclude} title='YOK'></Button>
            <Button onPress={include} title='VAR'></Button>
        </View>

    </>
    )
}

export default WorkingMemory