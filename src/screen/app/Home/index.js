import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Button from '../../../components/button';
import styles from './styles';
import Header from '../../../components/header';
import PlusIcon from '../../../components/plusIcon';
import Title from '../../../components/title';
import { setTasks } from '../../../store/tasks';
import StatusCard from '../../../components/statusCard';
import moment from 'moment/moment';

const Home = ({ navigation }) => {
    const user = useSelector(state => state.user.data);
    const tasks = useSelector(state => state.tasks.data);
    const toUpdate = useSelector(state => state.tasks.toUpdate);
    const dispatch = useDispatch();

    const [counts, setCounts] = useState({});

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

    useEffect(() => {
        if (tasks?.length) {
            const highPriority = tasks?.filter(task => task?.category === 'urgent' || task?.category === 'important');
            const today = moment(new Date()).format('YYYY-MM-DD');
            const dueDeadline = tasks?.filter(task => {
                const deadline = task?.deadline.seconds * 1000;
                const deadlineFormatted = moment(deadline).format('YYYY-MM-DD')
                return moment(deadlineFormatted).isBefore(today);
            });
            const quickWin = tasks?.filter(task => task?.category === 'quick_win');
            setCounts({
                highPriority: highPriority?.length,
                dueDeadline: dueDeadline?.length,
                quickWin: quickWin?.length
            })
        }
    }, [tasks])


    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="Inicio" />
                <ScrollView>
                    <Title type="thin">Tareas diarias:</Title>
                    <View style={styles.row}>
                        <StatusCard label={"Alta prioridad"} count={counts?.highPriority} />
                        <StatusCard label={"Tareas Vencidas"} type="error" count={counts?.dueDeadline} />
                        <StatusCard label={"Completadas"} count={counts?.quickWin} />
                    </View>
                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Tasks')}>
                        <Text style={styles.title}>Consultar todas mis tareas</Text>
                        <Text style={styles.subTitle}>Ver todas las tareas y filtrarlas por las categorías que hayas seleccionado al crearlas</Text>
                    </TouchableOpacity>
                </ScrollView>
                <PlusIcon />
            </SafeAreaView>
        </>
    )
}

export default React.memo(Home);