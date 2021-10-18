import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from './title';

export default function Home() {
  return (
    <View style={styles.AppView}>
        <Text style={styles.AppName}>QuiCo</Text> 

        <Text style={styles.HomeName}>Home</Text>

        <TouchableOpacity>       
        <Text style={styles.asd}>Take A Test</Text>
        </TouchableOpacity>
                
        <TouchableOpacity>       
        <Text style={styles.asd}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity >       
        <Text style={styles.asd}>Your Score</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    AppView:{
        position: "absolute", 
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        },

    AppName:{
        fontSize: 60,
        textAlign: "center",
        fontWeight: '800',
        backgroundColor: "#40916c",
        paddingTop: 40,
        paddingBottom: 10,
        },
    
    HomeName:{
        fontSize: 25,
        textAlign: "left",
        backgroundColor: "#95d5b2",
        padding: 20,
        borderColor: "white",
        borderWidth: 2,
        },

    asd:{
        textAlign: "center",
        fontSize: 40,
        padding: 50,
        backgroundColor: "#588157",
        borderColor: "#95d5b2",
        borderWidth: 10,
        


    },



    

  
});
