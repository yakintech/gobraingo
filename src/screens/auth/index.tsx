import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthHome from './AuthHome';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (<>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='AuthHome'
                component={AuthHome}
                options={{
                    headerShown: false
                }}

            />
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}

            />
            <Stack.Screen
                name='Register'
                component={RegisterScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>


    </>
    )
}

export default AuthStack