import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home =({navigation}) => {
     return (
    <View style={styles.AppView}>
        <TouchableOpacity onPress={()=>navigation.navigate('Test')}>      
        <Text style={styles.asd}>Take A Test</Text>
        </TouchableOpacity>
    
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>    
        <Text style={styles.asd}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Score')}>    
        <Text style={styles.asd}>Your Score</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Home;

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
        fontSize: 50,
        padding: 50,
        borderColor: "#95d5b2",
        borderWidth: 15,
        borderRadius: 50,
        color: 'black',
              
        
    },



    

  
});
