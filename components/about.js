import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const About =({navigation}) => {
     return (
    <View style={styles.AppView}>
            <Text style={styles.About}>
            HIT238 project created BY Jenish Oli.
            </Text>
            <Text style={styles.About}>
            Quiz App Development For Programming Coding Learner
            </Text>
            <Text style={styles.About}>
            Sets of 12 Question to Develop your Coding Skills
            </Text>
            <Text style={styles.About}>
            Submitted on 5th November 2021
            </Text>  
      

    </View>
    
  );
}

export default About;

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

    About:{
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 30,

    }

  
});
