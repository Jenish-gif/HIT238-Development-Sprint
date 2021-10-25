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
        padding: 50,
        backgroundColor: "white",
        borderColor: "#95d5b2",
        borderWidth: 10,
        


    },



    

  
});
