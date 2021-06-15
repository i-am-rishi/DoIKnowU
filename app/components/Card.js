import React,{useState} from 'react'
import { View,StyleSheet,Image, Text,FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Card({list}) {

    const[items,setItems]=useState(list);


    let duplicateItem=[...list];
    function handleLike(likeObj){
        const index=duplicateItem.indexOf(likeObj);
        duplicateItem[index].like=!duplicateItem[index].like;
        setItems(duplicateItem);
    }

    function handleSave(likeObj){
        const index=duplicateItem.indexOf(likeObj);
        duplicateItem[index].save=!duplicateItem[index].save;
        setItems(duplicateItem);
    }


    return (
        <FlatList
        data={items}
        keyExtractor={items=> items.name}
        renderItem={({item})=>(
            <View style={styles.container}>
            <Image style={styles.image} source={item.image}/>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.iconsContainer}>
                <TouchableOpacity><FontAwesome size={30} style={[styles.icon,{color:item.like?"tomato":"#6c757d"}]} onPress={()=>handleLike(item)} name="heart"/></TouchableOpacity>
                <TouchableOpacity><FontAwesome size={30} style={styles.icon} name="compress"/></TouchableOpacity>
                <TouchableOpacity><FontAwesome size={30} style={[styles.icon,{color:item.save?"tomato":"#6c757d"}]} onPress={()=>handleSave(item)} name="bookmark"/></TouchableOpacity>
            </View>
        </View>
        )}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f8f9fa",
        padding:5,
        paddingBottom:20,
        borderRadius:10
    },
    iconsContainer:{
        flexDirection:"row",
        width:"50%",
        justifyContent:"space-between",
        marginLeft:20
    },
    icon:{
        color:"#6c757d"
    },
    image:{
        width:"100%",
        height:250,
    },
    name:{
        fontSize:35,
        marginVertical:10,
        marginLeft:10
    }
})
