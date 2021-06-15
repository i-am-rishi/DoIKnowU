import React,{useState} from 'react'
import { StyleSheet,TouchableWithoutFeedback,View,Text } from 'react-native'


import AppButton from './AppButton'
import InputBox from './InputBox'
import InputModalBox from './InputModalBox'

const genderOptions=[
    {
        icon:"male",
        title:"Man",
        value:1
    },
    {
        icon:"female",
        title:"Woman",
        value:2
    },
    {
        icon:"neuter",
        title:"Trans",
        value:3
    },
];
export default function Form({toggle,onSelect}) {
    const [gender,setGender]=useState();
    const [interest,setInterest]=useState();
    return (
        <View style={styles.container}>
            {toggle ? (
                <>
                 <InputBox
                 iconName="adn"
                 placeholder="Name"
                 secureTextEntry={false}
                 keyboardType="default"
                 maxLength={20}
                 />
                 <InputBox
                     iconName="envelope"
                     placeholder="Email - someone@something.com"
                     secureTextEntry={false}
                     keyboardType="email-address"
                     maxLength={50}
                 />
                 <InputBox
                     iconName="phone"
                     placeholder="Mobile Number - 94******01"
                     secureTextEntry={false}
                     keyboardType="numeric"
                     maxLength={10}
                 />
                 <InputBox
                 iconName="play"
                     placeholder="Hobbies - Cricket, Swimming, Singing, Travelling"
                     secureTextEntry={false}
                     keyboardType="default"
                     maxLength={50}
                 />
                 <InputBox
                     iconName="birthday-cake"
                     placeholder="Your Age"
                     secureTextEntry={false}
                     keyboardType="numeric"
                     maxLength={2}
                 />
                 <InputBox
                         iconName="key"
                         placeholder="Password"
                         secureTextEntry={true}
                         keyboardType="default"
                         maxLength={50}
                     />
                 <InputBox
                     iconName="key"
                     placeholder="Confirm Password"
                     secureTextEntry={true}
                     keyboardType="default"
                     maxLength={50}
                 />
                 <View style={styles.modalRepresentation}>
                     <InputModalBox placeholder="I am" selectedItem={gender} onSelectItem={item=>setGender(item)} items={genderOptions} iconName="genderless"/>
                     <InputModalBox placeholder="Interested In" selectedItem={interest} onSelectItem={item=>setInterest(item)} items={genderOptions} iconName="genderless"/>
                 </View>
                 <AppButton text="Sign Up" style={{marginTop:10}}/>
                 <TouchableWithoutFeedback onPress={()=>onSelect(!toggle)} ><Text style={styles.toggleLink}>Already have an account? Log In</Text></TouchableWithoutFeedback>
             </>
            ):(
                <View style={styles.login}>
                    <InputBox
                        iconName="envelope"
                        placeholder="Email - someone@something.com"
                        secureTextEntry={false}
                        keyboardType="email-address"
                        maxLength={25}
                    />
                     <InputBox
                        iconName="key"
                        placeholder="Password - ***************"
                        secureTextEntry={true}
                        keyboardType="default"
                        maxLength={50}
                    />
                    <AppButton text="Log In" style={{marginTop:10}}/>
                    <TouchableWithoutFeedback onPress={()=>onSelect(!toggle)} ><Text style={styles.toggleLink}>Don't have an account? Sign Up</Text></TouchableWithoutFeedback>
                </View>
            )}

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:5
    },
    login:{
        marginTop:150,
    },
    toggleLink:{
        width:"100%",
        marginVertical:10,
        color:"grey",
        marginHorizontal:80
    }
})