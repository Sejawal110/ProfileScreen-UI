import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useTheme } from '@react-navigation/native';

export default function Header() {
    const { colors } = useTheme();
    return (
        <View style={styles.headerContainer}>

            <TouchableOpacity>
                <AntDesign name="arrowleft" size={30} color={colors.iconPrimary} />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="setting" size={30} color={colors.iconPrimary} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


    },
})