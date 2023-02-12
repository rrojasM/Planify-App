import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';

import Button from '../../../components/button';
import CheckBox from '../../../components/checkbox';
import Input from '../../../components/input';
import Title from '../../../components/title';
import styles from './styles';
import colors from '../../../constants/colors';

const Singup = ({ navigation }) => {
    const [agreed, setAgreed] = useState(false);
    const [values, setValues] = useState({})

    const onCheckboxPress = () => {
        setAgreed(value => !value)
    }

    const onChange = (value, key) => {
        setValues(val => ({
            ...val,
            [key]: value
        }))
    }

    //console.log('Value :>> ', values)

    const onSubmit = () => {

        if (!values.firts_name || !values.last_name) {
            alert(' Por favor ingrese nombre y apellido');
            return;
        }

        if (values.password !== values.confirm_password) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (!agreed) {
            alert('Debes aceptar los términos!');
            return;
        }

        auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                alert('Usuario creado exitosamente ');

                auth().currentUser.updateProfile({ displayName: `${values.firts_name} ${values.last_name}` })
                //navigation.navigate('Signin')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Title>Registro!</Title>

                <Input onChangeText={(val) => onChange(val, 'firts_name')} placeholder="Nombre" />
                <Input onChangeText={(val) => onChange(val, 'last_name')} placeholder="Apellido" />
                <Input onChangeText={(val) => onChange(val, 'email')} placeholder="Correo electrónico" keyboardType='email-address' />
                <Input onChangeText={(val) => onChange(val, 'password')} placeholder="Contraseña" secureTextEntry />
                <Input onChangeText={(val) => onChange(val, 'confirm_password')} placeholder="Confirmar Contraseña" secureTextEntry />

                <Button onPress={onSubmit} type={'blue'}>Crear cuenta</Button>

                <View style={styles.row}>
                    <CheckBox checked={agreed} onPress={onCheckboxPress} />
                    <Text style={styles.agreeText}>
                        Acepta
                        <Text style={styles.link}>Terminos y Condiciones</Text> y
                        <Text style={styles.link}> Políticas de privacidad</Text>
                    </Text>
                </View>

                <Text style={styles.footerText}>
                    Ya estas registrado?
                    <Text onPress={() => { navigation.navigate('Signin') }} style={styles.footerLink}> Iniciar Sesión!</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Singup);