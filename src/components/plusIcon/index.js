import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';


const PlusIcon = () => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('AddTask');
    }

    return (
        <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
            <Text style={styles.plus}>+</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 24,
        borderRadius: 100,
        width: 60,
        height: 60,
        backgroundColor: colors.blue,
        position: 'absolute',
        bottom: 24,
        right: 24
    },
    plus: {
        fontSize: 32,
        marginTop: -2,
        color: colors.white,
        fontWeight: '600'
    },

});

export default React.memo(PlusIcon);
