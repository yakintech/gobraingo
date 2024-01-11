import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import RNFS, { ReadDirItem } from 'react-native-fs';


const ReactNativeReadFile = () => {

    const [files, setFiles] = useState<ReadDirItem[]>([]);

    useEffect(() => {
        RNFS.readDir(RNFS.ExternalDirectoryPath)
            .then((result) => {
                 setFiles(result);
                 console.log(result);
                 
            })
            .catch((err) => {
                console.log("ERROR");
            });
    }, []);
    //this component will render our list item to the UI
    const Item = ({ name, isFile }: any) => {
        return (
            <View>
                <Text>Name: {name}</Text>
                <Text> {isFile ? "It is a file" : "It's a folder"}</Text>
            </View>
        );
    };
    const renderItem = ({ item }: any) => {
        return (
            <View>

                {/* The isFile method indicates whether the scanned content is a file or a folder*/}
                <Item name={item.name} isFile={item.isFile()} />
            </View>
        );
    };
    return (

        <FlatList
            data={files}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.name}
        />

    );
}

export default ReactNativeReadFile