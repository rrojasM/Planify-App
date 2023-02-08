import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 46,
        paddingTop: 0,
        backgroundColor: colors.white
    },
    image: {
        width: '100%',
        flex: 1
    },
    title: {
        color: colors.black,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
    subTitle: {
        color: colors.grey,
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 16
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }
});

export default styles;