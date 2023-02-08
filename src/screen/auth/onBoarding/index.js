import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';

const OnBoarding = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image style={styles.image} source={require('../../../assets/onboarding.png')} />
                    <View style={styles.footer} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Best task management app</Text>
                    <Text style={styles.subTitle}>Get organized by sorting out all your tasks and boost your productivity.</Text>

                    <Button onPress={() => navigation.navigate('Signin')}>Login</Button>
                    <Button onPress={() => navigation.navigate('Signup')} type={'blue'}>Get Started</Button>

                </View>
            </View>
        </>
    )
}

export default React.memo(OnBoarding);