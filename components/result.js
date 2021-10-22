
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';

const Result =({navigation}) => {
  return (
    <View>

        <View>
        <Text style={styles.ScoreName}>Your Score:</Text>
        </View>

        <Text style={styles.Score}>9/12</Text>
    
        <View style={styles.bannerContainer}>
        <Image 
        source ={{uri:'https://thumbs.dreamstime.com/b/rat-cartoon-character-level-d-rendered-illustration-69157480.jpg'}}
        style={styles.banner}
        resizeMode="contain"
        />
        </View>

        <Text style={styles.Great}>You Did Great!!!</Text>

        <TouchableOpacity style={styles.Homebutton} onPress={()=>navigation.navigate('Home')}>      
            <Text  style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>

        </View>

  );
}
export default Result;

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




    
  
  });
  