import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from '../src/screens/Login-Signup/LoginScreen'
import NavigationContainer, { createStaticNavigation } from '@react-navigation/native'

const Stack = createStaticNavigation()

const Index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index