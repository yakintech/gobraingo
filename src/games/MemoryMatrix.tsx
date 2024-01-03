import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const MemoryMatrix = () => {
    const [matrixX, setmatrixX] = useState(2)
    const [matrixY, setmatrixY] = useState(2)
    const [randomBoxes, setrandomBoxes] = useState<Number[]>([0,1])

    const next = () => {
        setmatrixX(matrixX + 1)
        setmatrixY(matrixY + 1)
    }

    useEffect(() => {

        let boxCount = matrixX
        for (let i = 0; i < boxCount; i++) {
            let random = Math.floor(Math.random() * (matrixX * matrixY))
            if (!randomBoxes.includes(random)) {
                setrandomBoxes([...randomBoxes, random])
            }
            else {
                i--
            }
        }
        

    }, [])

    return (<>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>MemoryMatrix</Text>
            {
                [...Array(matrixX)].map((x, i) => {
                    return (<View key={i} style={{ flexDirection: 'row' }}>
                        {
                            [...Array(matrixY)].map((y, j) => {
                                return (<View key={j} style={{ width: 50, height: 50, borderStyle: 'solid', borderWidth: 2 }}></View>)
                            })
                        }
                    </View>)
                })
            }

        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={next} title='Next'></Button>
        </View>

    </>)
}

export default MemoryMatrix