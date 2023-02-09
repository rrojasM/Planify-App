import React from 'react';
import { TextInput } from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

const Input = ({ outlined, ...props }) => {
    return (
        <TextInput
            placeholderTextColor={colors.midGrey}
            style={[styles.input, outlined ? styles.outlined : {}]} {...props}
        />
    );
}

export default React.memo(Input);
