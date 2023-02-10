import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Pressable, Alert, ActivityIndicator, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Button from '../../../components/button';
import styles from './styles';
import Title from '../../../components/title';
import Input from '../../../components/input';
import Categories from '../../../components/categories';
import { categories } from '../../../constants/categories';
import DateInput from '../../../components/dateInput';
import moment from 'moment';

const AddTask = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState();
    const [deadline, setDeadline] = useState(new Date());
    const [loading, setLoading] = useState(false);

    const handleBack = () => {
        navigation.goBack();
    }

    const onSubmit = () => {
        const today = moment(new Date()).format('YYYY-MM-DD');
        const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');

        if (!title) {
            Alert.alert('Please enter the task title');
            return;
        }

        if (moment(deadlineFormatted).isBefore(today)) {
            Alert.alert('Please enter future date');
            return;
        }

        setLoading(true);
        firestore()
            .collection('Task')
            .doc('ABC')
            .set({
                title,
                deadline,
                category
            })
            .then(() => {
                setLoading(false);
                navigation.navigate('Tasks');
                setTitle('');
                setDeadline(new Date());
                setCategory(null);
            }).catch(e => {
                console.log('ERROR =====>', e);
                setLoading(false);
                Alert.alert(e.message);
            });
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
                        <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                    </Pressable>

                    <Title type="thin">Add New Task</Title>

                    <Text style={styles.label}>Describe the task</Text>
                    <Input value={title} onChangeText={setTitle} outlined placeholder="Type here..." />

                    <Text style={styles.label}>Type</Text>
                    <Categories categories={categories} selectedCategory={category} onCategoryPress={setCategory} />

                    <Text style={styles.label}>Deadline</Text>
                    <DateInput value={deadline} onChange={setDeadline} />

                    {
                        loading ? <ActivityIndicator /> : (
                            <Button style={styles.button} type="blue" onPress={onSubmit}>Add the Task</Button>
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default React.memo(AddTask);