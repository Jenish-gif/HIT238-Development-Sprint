
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Development =({navigation}) => {
    return (
            <View style={styles.AppView}>
           
                <Text style={styles.asd}>This Quiz Section is Under maintenance. 
                Please Practice with HTML for the moment. 
                We will be up soon. 
                Keep Quizing</Text>
                

        <TouchableOpacity style={styles.Homebutton} onPress={()=>navigation.navigate('Home')}>      
            <Text  style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>
             
            </View>

            
 );
}

export default Development;


const styles = StyleSheet.create({

       AppView:{
        position: "absolute", 
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 30,
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
        margin: 30,
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
  