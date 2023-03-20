import React,{useState} from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Email =()=>{
    return(
        <View>
            <Text>Email</Text>
            <TextInput
                plcaeholder = {'Enter Email Id'}
            />
        </View>
    );
}

const Phone = () =>{
    return(
        <>
            <Text>
                Phone
            </Text>
            <TextInput
                plcaeholder={'Enter Phone Number'}
            />
        </>
    );
}

const Button = () => {
    const [tab , setTab] = useState();
    return (
        <View>
            <Text>Hello Akash Your are set</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Button;
