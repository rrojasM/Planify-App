import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';


const Header = ({ title }) => {

    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={openDrawer} hitSlop={8}>
                <Image style={styles.icon} source={require('../../assets/menu.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24
    },
    title: {
        fontSize: 20,
        color: colors.purple,
        fontWeight: '500'
    },
    icon: {
        width: 24,
        height: 24
    }
});

export default React.memo(Header);
