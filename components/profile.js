import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, RightOutlined } from 'react-native';
import Title from './title'; 


const Profile =({navigation}) => {
     return (
    <View style={styles.AppView}>
        <TouchableOpacity onPress={()=>navigation.navigate('About')}>      
        <Text style={styles.asd}>About Us</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate('Score')}>    
        <Text style={styles.asd}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Login Page')}>    
        <Text style={styles.asd}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Homebutton} onPress={()=>navigation.navigate('Home')}>      
            <Text  style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>

    </View>
    
  );
}

export default Profile;

const styles = StyleSheet.create({
    AppView:{
        position: "absolute", 
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        },

    asd:{
        textAlign: "left",
        fontSize: 20,
        padding: 25,
        backgroundColor: "white",
        borderColor: "#95d5b2",
        borderWidth: 2,
    },

    Homebutton:{
        margin: 50,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: "#427aa1",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
        
    },

       buttonText:{    
        fontSize: 20,  
        fontWeight: '600',
        color: 'white',
       },

  
});
