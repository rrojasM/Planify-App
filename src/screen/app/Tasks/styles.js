import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        marginVertical: 8
    },
    taskText: {
        color: colors.black,
        marginLeft: 8
    },
    checked: {
        textDecorationLine: 'line-through'
    }
});

export default styles;