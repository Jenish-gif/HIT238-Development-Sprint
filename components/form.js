import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, TextInput } from 'react-native';


class Form extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'',
            email:'',
            password:'',
        }
    }
render(){
    return(<View style={{margin:20}} >
            <TextInput placeholder="Enter Your Name"/>
            
        </View>
    )
}
}

export default Form