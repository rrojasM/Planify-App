import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backContainer: {
        padding: 24,
    },
    backIcon: {
        width: 32,
        height: 32
    },
    label: {
        fontSize: 16,
        color: colors.black,
        marginHorizontal: 24,
        fontWeight: '500'
    }
});

export default styles;