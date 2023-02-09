import React from "react";
import { Text, StyleSheet, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import auth from '@react-native-firebase/auth';

import colors from "../../constants/colors";

function DrawerContent(props) {

    const { navigation } = props;

    const logout = () => {
        auth().signOut().then(() => console.log("User signed out!"));
    }

    /*  console.log('====================================');
     console.log(JSON.stringify(props));
     console.log('===================================='); */
    return (

        <DrawerContentScrollView {...props}>
            {/*  <DrawerItemList {...props} /> */}
            <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Home</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
            <Text style={styles.link} onPress={() => Linking.openURL('https://termify.io/privacy-policy-generator?gclid=CjwKCAiA0JKfBhBIEiwAPhZXD3FE3cGnk5hhVyhgKMXl7ky-BenMKZfap_-oEplilIXfN6F4h6erORoCw9YQAvD_BwE')}>Privacy Policy</Text>
            <Text style={styles.link} onPress={() => Linking.openURL('https://www.notice.studio/create-terms-of-use?utm_source=terms_of_use&utm_medium=1_1&utm_campaign=google_search_ads&gclid=CjwKCAiA0JKfBhBIEiwAPhZXDwi2_uoh8Bmfj-E9LfukVg5SGFI0OdB6SBsZ-Qy9QCBBeklul9bZvBoCFawQAvD_BwE')}>Terms and Conditions</Text>
            <Text style={styles.link} onPress={logout}>Log out</Text>

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    link: {
        color: colors.black,
        fontWeight: '500',
        fontSize: 16,
        margin: 8,
        marginHorizontal: 16
    }
})

export default React.memo(DrawerContent);