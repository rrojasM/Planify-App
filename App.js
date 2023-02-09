import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer, DefaultNavigatorOptions, DefaultTheme } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Routes from './src/routes';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFFFFF'
    }
  }

  /*  const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState();
 
   console.log('User ===>', user);
   function onAuthStateChanged(user) {
     setUser(user);
     if (initializing) {
       setInitializing(false);
     }
   }
 
   useEffect(() => {
     const suscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return suscriber
   }, []);
 
   if (initializing) {
     return null;
   }
 
   if (user) {
     <Text style={{ margin: 40 }}>Welcome </Text>
   } */

  return (
    <NavigationContainer theme={theme}>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
