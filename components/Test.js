import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import Title from './title'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MyStack} from './index';


const Test =({navigation}) => {
     return (
    <View style={styles.AppView}>      
     
        <TouchableOpacity onPress={()=>navigation.navigate('Test')}> 
        <Text style={styles.asd}>HTML</Text>
        </TouchableOpacity>
            
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>    
        <Text style={styles.asd}>CSS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Score')}>    
        <Text style={styles.asd}>JAVASCRIPT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Score')}>    
        <Text style={styles.asd}>Python</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Homebutton} onPress={()=>navigation.navigate('Home')}>      
            <Text  style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>



    </View>
  );
}

export default Test;

const styles = StyleSheet.create({
    AppView:{
        position: "absolute", 
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        },

    asd:{
        textAlign: "center",
        fontSize: 40,
        padding: 20,
        backgroundColor: "#8dab7f",
        borderColor: "#6a8eae",
        borderWidth: 10,
        color: '#682d63',
        
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
