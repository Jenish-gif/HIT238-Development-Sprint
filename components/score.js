
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';

const Score =({navigation}) => {
    return (
            <View style={styles.AppView}>
           
                <Text style={styles.asd}>You Scored 8 in HTML Quiz 1</Text>
                <Text style={styles.asd}>You Scored 6 in CSS Quiz 1</Text>
                <Text style={styles.asd}>You Scored 9 in HTML Quiz 2</Text>
                <Text style={styles.asd}>You Scored 7 in Python Quiz 1</Text>
                <Text style={styles.asd}>You Scored 4 in Java Quiz 1</Text>
                <Text style={styles.asd}>You Scored 7 in CSS Quiz 2</Text>

        <TouchableOpacity style={styles.Homebutton} onPress={()=>navigation.navigate('Home')}>      
            <Text  style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>
             
            </View>

            
 );
}

export default Score;


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
        margin: 40,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: "#427aa1",
        padding: 10,
        borderRadius: 15,
        alignItems: "center",
        },

       buttonText:{    
        
        fontSize: 20,  
        fontWeight: '600',
        color: 'white',
       },


  });
  