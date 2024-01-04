import AsyncStorage from '@react-native-async-storage/async-storage';




export const authStorageHelper = {
    setLoginStorage: async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@login', jsonValue)
        } catch (e) {
            // saving error
        }
    },
    getLoginStorage: async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@login')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    },
    removeLoginStorage: async () => {
        try {
            await AsyncStorage.removeItem('@login')
        } catch (e) {
            // remove error
        }
    }
}


