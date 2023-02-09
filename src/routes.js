import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import OnBoarding from './screen/auth/onBoarding';
import Signin from './screen/auth/signin';
import Signup from './screen/auth/signup';
import Home from './screen/app/Home';
import AddTask from './screen/app/AddTask';
import Tasks from './screen/app/Tasks';
import DrawerComponent from './components/drawerComponent';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


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

    const Tabs = () => (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image style={styles.icon} source={focused ? require('./assets/home_active.png') : require('./assets/home_inactive.png')} />
                )
            }} />
            <Tab.Screen name="Tasks" component={Tasks} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image style={styles.icon} source={focused ? require('./assets/calendar_active.png') : require('./assets/calendar_inactive.png')} />
                )
            }} />
        </Tab.Navigator>
    );

    if (user) {
        return (
            <Drawer.Navigator drawerContent={props => <DrawerComponent {...props} />}>
                <Drawer.Screen name="Tabs" component={Tabs} />
                <Drawer.Screen name="AddTask" component={AddTask} />
            </Drawer.Navigator>
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

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
});

export default React.memo(Routes);
