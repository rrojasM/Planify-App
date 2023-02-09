import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';
import Header from '../../../components/header';
import PlusIcon from '../../../components/plusIcon';
import Title from '../../../components/title';

const Tasks = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="Tasks" />

                <ScrollView>
                    <Title type="thin">To do Tasks:</Title>

                </ScrollView>

                <PlusIcon />
            </SafeAreaView>
        </>
    )
}

export default React.memo(Tasks);