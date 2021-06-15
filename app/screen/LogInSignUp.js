import React,{useState} from 'react'
import { Image} from 'react-native'

import AppScreen from '../components/AppScreen'
import Form from '../components/Form'
export default function LogInSignUp() {
    const [toggle,setToggle]=useState(false)
    return (
        <AppScreen>
            <Image style={{width:"100%",height:60,marginVertical:10}} source={require("../assets/doiknowu.jpg")}/>
            <Form onSelect={(item)=>setToggle(item)} toggle={toggle}/>
        </AppScreen>
    )
}
