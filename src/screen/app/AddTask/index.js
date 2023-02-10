import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, Pressable } from 'react-native';
import Button from '../../../components/button';
import styles from './styles';
import Title from '../../../components/title';
import Input from '../../../components/input';
import Categories from '../../../components/categories';
import { categories } from '../../../constants/categories';
import DateInput from '../../../components/dateInput';

const AddTask = ({ navigation }) => {

    const [category, setCategory] = useState();
    const [deadline, setDeadline] = useState(new Date());


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

                <Text style={styles.label}>Type</Text>
                <Categories categories={categories} selectedCategory={category} onCategoryPress={setCategory} />

                <Text style={styles.label}>Deadline</Text>
                <DateInput value={deadline} onChange={setDeadline} />
            </SafeAreaView>
        </>
    )
}

export default React.memo(AddTask);