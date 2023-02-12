import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import colors from '../../constants/colors';
import styles from './styles';
import moment from 'moment/moment';

const DateInput = ({ value, onChange, ...props }) => {
    const [open, setOpen] = useState(false)

    const onDateOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <TouchableOpacity onPress={onDateOpen} style={styles.outlined}>
                <Image resizeMode='contain' style={styles.icon} source={require('../../assets/calendar.png')} />
                <Text style={styles.text}>{moment(value).format('L') || 'Seleccione fecha...'}</Text>
            </TouchableOpacity>

            <DatePicker
                modal
                mode='date'
                open={open}
                date={value}
                onConfirm={(date) => {
                    setOpen(false)
                    onChange(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </>
    );
}

export default React.memo(DateInput);
