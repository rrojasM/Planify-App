import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Title from '../../../components/title';
import styles from './styles';

const Signin = ({ navigation }) => {
    const [values, setValues] = useState({});

    const onChange = (value, key) => {
        setValues(vals => ({
            ...vals,
            [key]: value,
        }));
    }

    const onSubmit = () => {

        if (!values.email || !values.password) {
            alert('Please enter Email and Password');
            return;
        }

        auth().signInWithEmailAndPassword(values.email, values.password).then(() => {
            console.log('User Singin successfully');
        }).catch(error => {
            console.log('Error ==>', error.message);
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('That email address is already in use!');
            } else if (error.code === 'auth/invalid-email') {
                Alert.alert('That email address is invalid!');
            } else {
                Alert.alert(error.message)
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>

            <Input placeholder="Email" keyboardType='email-address' onChangeText={(val) => onChange(val, 'email')} />
            <Input placeholder="Password" secureTextEntry onChangeText={(val) => onChange(val, 'password')} />

            <Button onPress={onSubmit}>Login</Button>


            <Text style={styles.footerText}>
                Not registered?
                <Text onPress={() => { navigation.navigate('Signup') }} style={styles.footerLink}> Sign up!</Text>
            </Text>
        </SafeAreaView>
    )
}

export default React.memo(Signin);