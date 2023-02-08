import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';

const AddTask = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text>Add Task</Text>
            </SafeAreaView>
        </>
    )
}

export default React.memo(AddTask);