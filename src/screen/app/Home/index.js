import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';
import Header from '../../../components/header';
import PlusIcon from '../../../components/plusIcon';
import Title from '../../../components/title';

const Home = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="Home" />
                <ScrollView>
                    <Title type="thin">Daily Tasks:</Title>

                </ScrollView>
                <PlusIcon />
            </SafeAreaView>
        </>
    )
}

export default React.memo(Home);