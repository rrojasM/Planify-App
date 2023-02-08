import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';

const Home = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text>Home</Text>
            </SafeAreaView>
        </>
    )
}

export default React.memo(Home);