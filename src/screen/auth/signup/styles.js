import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24
    },
    footerText: {
        color: colors.grey,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 28
    },
    footerLink: {
        color: colors.purple,
        fontWeight: 'bold',
        marginVertical: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText: {
        color: colors.grey,
        fontSize: 12,
        marginLeft: 8
    },
    link: {
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
});

export default styles;