import React,{useState} from 'react'
import { TextInput, Text,StyleSheet,View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
export default function InputBox({iconName="bars",style,placeholder,keyboardType,secureTextEntry,maxLength,...otherProps}) {

    const[text,setText]=useState("");

    return (
        <View style={[styles.container,style]}>
            <FontAwesome style={styles.icon} name={iconName}></FontAwesome>
            <TextInput
                style={styles.text}
                placeholder={placeholder}
                maxLength={maxLength}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                onChangeText={(val)=>setText(val)}
                {...otherProps}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:50,
        backgroundColor:"#e9ecef",
        padding:15,
        flexDirection:"row",
        borderRadius:30,
        alignItems:"center",
        marginVertical:5
    },
    icon:{
        color:"tomato"
    },
    text:{
        marginHorizontal:10
    }
})