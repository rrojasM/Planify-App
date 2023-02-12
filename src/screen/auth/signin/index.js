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
            alert('Por favor ingrese usuario y contraseña');
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
            <Title>Bienvenido!</Title>

            <Input placeholder="Correo" keyboardType='email-address' onChangeText={(val) => onChange(val, 'email')} />
            <Input placeholder="Contraseña" secureTextEntry onChangeText={(val) => onChange(val, 'password')} />

            <Button onPress={onSubmit}>Iniciar Sesión</Button>


            <Text style={styles.footerText}>
                No estas registrado?
                <Text onPress={() => { navigation.navigate('Signup') }} style={styles.footerLink}>Registrate!</Text>
            </Text>
        </SafeAreaView>
    )
}

export default React.memo(Signin);