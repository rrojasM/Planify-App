import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import OnBoarding from './screen/auth/onBoarding';
import Signin from './screen/auth/signin';
import Signup from './screen/auth/signup';


const Stack = createStackNavigator();
const Routes = () => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) {
            setInitializing(false);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    if (initializing) {
        return null
    }

    if (user) {
        const logout = () => {
            auth().signOut().then(() => console.log("User signed out!"));
        }
        return (
            <>
                <Text style={{ margin: 40 }}>Welcome</Text>
                <Text style={{ margin: 40 }} onPress={logout}>Log out</Text>

            </>
        )
    }

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='OnBoarding' component={OnBoarding} />
            <Stack.Screen name='Signin' component={Signin} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>

    );
};

export default React.memo(Routes);
