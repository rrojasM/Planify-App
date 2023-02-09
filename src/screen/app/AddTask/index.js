import React from 'react';
import { View, Text, Image, SafeAreaView, Pressable } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';
import Title from '../../../components/title';
import Input from '../../../components/input';

const AddTask = ({ navigation }) => {

    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                </Pressable>

                <Title type="thin">Add New Task</Title>

                <Text style={styles.label}>Describe the task</Text>
                <Input outlined placeholder="Type here..." />
            </SafeAreaView>
        </>
    )
}

export default React.memo(AddTask);