import React from 'react'
import {TouchableHighlight,Image,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import AppScreen from './AppScreen';

export default function Head() {
    return (
        <TouchableHighlight style={styles.check}>
            <AppScreen style={styles.container}>            
                <FontAwesome style={styles.icon} size={15} name="plus" onPress={()=>console.log("Pressed")}/>
                <Image style={styles.image}  source={require("../assets/doiknowu.jpg")}/>
                <FontAwesome style={styles.icon} size={15} name="align-justify" onPress={()=>console.log("Pressed 2.0")}/>
            </AppScreen>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    check:{
        height:90,
    },
    container:{
        width:"100%",
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    icon:{
        // color:"#ff0000"
        color:"grey"
    },
    image:{
        width:"60%",
        height:50
    }
})