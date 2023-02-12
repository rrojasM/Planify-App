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
                    <Text style={styles.title}>La mejor aplicación de gestión de tareas.</Text>
                    <Text style={styles.subTitle}>Organícese ordenando todas sus tareas y aumente su productividad.</Text>

                    <Button onPress={() => navigation.navigate('Signin')}>Acceso</Button>
                    <Button onPress={() => navigation.navigate('Signup')} type={'blue'}>Registro</Button>

                </View>
            </View>
        </>
    )
}

export default React.memo(OnBoarding);