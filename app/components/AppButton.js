import React from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'

export default function AppButton({text,style}) {
    return (
        <TouchableOpacity onPress={()=>console.log("Hit It")}>
            <View style={[styles.container,style]}>
                <Text style={styles.text} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"tomato",
        borderRadius:30,
        alignItems:"center",
    },
    text:{
        color:"white",
        fontSize:25,
        fontWeight:"bold"
    }
})
