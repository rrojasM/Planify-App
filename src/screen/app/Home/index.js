import React, { useEffect } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Button from '../../../components/button';
import styles from './styles';
import Header from '../../../components/header';
import PlusIcon from '../../../components/plusIcon';
import Title from '../../../components/title';
import { setTasks } from '../../../store/tasks';

const Home = () => {
    const user = useSelector(state => state.user.data);
    const tasks = useSelector(state => state.tasks.data);
    const toUpdate = useSelector(state => state.tasks.toUpdate);

    const dispatch = useDispatch();

    console.log('TASKS LIST FROM REDUX: ', tasks);

    useEffect(() => {
        firestore()
            .collection('Tasks')
            .where('userId', '==', user?.uid)
            .get()
            .then(querySnapshot => {
                //console.log('Total Task:', querySnapshot.size);
                const tasksList = [];

                querySnapshot.forEach(documentSnapshot => {
                    //console.log('User ID:', documentSnapshot.id, documentSnapshot.data());
                    tasksList.push({
                        uid: documentSnapshot.id,
                        ...(documentSnapshot.data() || {})
                    });
                });

                dispatch(setTasks(tasksList));
            });
    }, [user, toUpdate, dispatch]);

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