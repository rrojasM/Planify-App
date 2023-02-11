import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';
import Header from '../../../components/header';
import PlusIcon from '../../../components/plusIcon';
import Title from '../../../components/title';
import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector(state => state.user.data);
    console.log('REDUX USER: =====>', user);
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