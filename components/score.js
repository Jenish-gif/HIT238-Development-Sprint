
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';

const Score =({navigation}) => {
    return (
   <View style={styles.AppView}>
       <Text style={styles.asd}>HTML Quiz 1</Text>
       <Text style={styles.asd}>CSS Quiz 1</Text>
       <Text style={styles.asd}>HTML Quiz 2</Text>
       <Text style={styles.asd}>Python Quiz 1</Text>
       <Text style={styles.asd}>Java Quiz 1</Text>       
       <Text style={styles.asd}>CSS Quiz 2</Text>
      </View>
   
 );
}

export default Score;


const styles = StyleSheet.create({

    ScoreName:{
        fontSize: 25,
        textAlign: "left",
        backgroundColor: "#95d5b2",
        padding: 20,
        borderColor: "white",
        borderWidth: 2,
    },

    Score:{
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 20,
        color: '#064789',
    },

    banner:{
        height: 200,
        width: 350,
    },

    bannerContainer:{
        justifyContent: 'center',
        alignItems: "center"
    },

    Great:{
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 5,
        color: 'red',

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
  
  });
  