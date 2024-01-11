import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';


const ImageGallery = () => {

    const [image, setimage] = useState("")


    const openImageLibrary = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0) {
                setimage(response.assets[0].uri || "");
            }
        })
    }



    return (<>
        <Pressable onPress={openImageLibrary}>
            <Text style={{fontSize:30}}>Go to image library</Text>
        </Pressable>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
    </>
    )
}

export default ImageGallery