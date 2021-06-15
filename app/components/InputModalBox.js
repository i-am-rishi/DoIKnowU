import React,{useState} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Modal,Button, FlatList} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import AppScreen from './AppScreen';
export default function InputModalBox({style,iconName,placeholder,selectedItem,onSelectItem,items}) {
    const [visibility,setVisibility]=useState(false);
    return (
        <>
            <TouchableOpacity onPress={()=>setVisibility(true)}>
                <View style={[styles.container,style]}>
                <FontAwesome style={styles.icon} size={20} name={selectedItem?selectedItem.icon:iconName}></FontAwesome>
                <Text style={styles.text}>{selectedItem?selectedItem.title:placeholder}</Text>
                <FontAwesome style={styles.icon} name="chevron-down"></FontAwesome>
                </View>
            </TouchableOpacity>
            <Modal visible={visibility}>
                    <Button title="Close" onPress={()=>setVisibility(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor={items=>items.value.toString()}
                        renderItem={({item})=>(<TouchableOpacity onPress={()=>{onSelectItem(item);setVisibility(false)}}>
                                                    <View style={styles.modalItems}>
                                                    <FontAwesome size={35} style={styles.modalIcons} name={item.icon}/>
                                                    <Text style={styles.modalText}>{item.title}</Text>
                                                    </View>
                                                </TouchableOpacity>)}
                    />
            </Modal> 
        </>
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
        marginVertical:10
    },
    icon:{
        color:"tomato"
    },
    text:{
        marginHorizontal:10,
        flex:1,
        fontSize:15,
        color:"grey"
    },
    modalItems:{
        flex:1,
        flexDirection:"row",
        marginVertical:10,
        alignItems:"center"
    },
    modalIcons:{
        color:"tomato",
        marginHorizontal:10
    },
    modalText:{
        fontSize:20
    }
})