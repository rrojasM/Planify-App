import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Button from '../../../components/button';
import styles from './styles';
import Header from '../../../components/header';
import PlusIcon from '../../../components/plusIcon';
import Title from '../../../components/title';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../../../components/checkbox';
import Categories from '../../../components/categories';
import { categories } from '../../../constants/categories';
import { setUpdate } from '../../../store/tasks';

const Tasks = () => {

    const tasks = useSelector(state => state.tasks.data);
    const dispatch = useDispatch();
    const [category, setCategory] = useState('all');
    const [filteredTasks, setFilteredTasks] = useState([]);


    useEffect(() => {
        if (category && category !== 'all') {
            const filtered = tasks?.filter(task => task.category === category);
            setFilteredTasks(filtered);
        } else {
            setFilteredTasks(tasks);
        }
    }, [category, tasks]);

    const onTaskUpdate = item => {
        firestore()
            .collection('Tasks')
            .doc(item?.uid)
            .update({
                checked: !item?.checked,
            })
            .then(() => {
                dispatch(setUpdate());
            })
    }

    const renderTaks = ({ item }) => {
        return (
            <View style={styles.row}>
                <Checkbox checked={item.checked} onPress={() => onTaskUpdate(item)} />
                <Text style={[styles.taskText, item?.checked ? styles.checked : {}]}>{item.title}</Text>
            </View>
        )
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header title="Tareas" />

                <FlatList
                    ListHeaderComponent={
                        <View style={{ marginBottom: 24 }}>
                            <Title type="thin">Tareas por hacer:</Title>
                            <Categories categories={[{ label: 'Todas', value: 'all' }, ...categories]} selectedCategory={category} onCategoryPress={setCategory} />
                        </View>
                    }
                    data={filteredTasks}
                    renderItem={renderTaks}
                    keyExtractor={item => String(item?.uid)}
                />

                <PlusIcon />
            </SafeAreaView>
        </>
    )
}

export default React.memo(Tasks);