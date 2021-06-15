import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from "expo-constants"

export default function AppScreen({children,style}) {
    return (
        <SafeAreaView style={[styles.container,style]}>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
    }
})