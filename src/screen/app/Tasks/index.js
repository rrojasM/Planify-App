import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';

const Tasks = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text>Tasks</Text>
            </SafeAreaView>
        </>
    )
}

export default React.memo(Tasks);