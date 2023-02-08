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
            alert('Please enter first name and last name');
            return;
        }

        if (values.password !== values.confirm_password) {
            alert('Passwords do not match');
            return;
        }

        if (!agreed) {
            alert('You should agree to the terms!');
            return;
        }

        auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                alert('User Created successfully');

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

                <Title>Join th hub!</Title>

                <Input onChangeText={(val) => onChange(val, 'firts_name')} placeholder="First Name" />
                <Input onChangeText={(val) => onChange(val, 'last_name')} placeholder="Last Name" />
                <Input onChangeText={(val) => onChange(val, 'email')} placeholder="Email" keyboardType='email-address' />
                <Input onChangeText={(val) => onChange(val, 'password')} placeholder="Password" secureTextEntry />
                <Input onChangeText={(val) => onChange(val, 'confirm_password')} placeholder="Confirm Password" secureTextEntry />

                <Button onPress={onSubmit} type={'blue'}>Create account</Button>

                <View style={styles.row}>
                    <CheckBox checked={agreed} onPress={onCheckboxPress} />
                    <Text style={styles.agreeText}>
                        I agree to
                        <Text style={styles.link}> Terms and Conditions</Text> and
                        <Text style={styles.link}> Privacy Policy</Text>
                    </Text>
                </View>

                <Text style={styles.footerText}>
                    Already registered?
                    <Text onPress={() => { navigation.navigate('Signin') }} style={styles.footerLink}> Sign in!</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Singup);