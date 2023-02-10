import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Pressable, Alert } from 'react-native';
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
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
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

                <Button style={styles.button} type="blue" onPress={onSubmit}>Add the Task</Button>
            </SafeAreaView>
        </>
    )
}

export default React.memo(AddTask);