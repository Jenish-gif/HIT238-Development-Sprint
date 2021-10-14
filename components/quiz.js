
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Quiz() {
  return (
    <View style={styles.container}>

      <View style={styles.question}>
          <Text>
              Q1. What is HTML?
          </Text>
      </View>

      <View style={styles.answer}>
        <TouchableOpacity>       
            <Text>Desktop Application</Text>
        </TouchableOpacity>

        <TouchableOpacity>       
            <Text>Programming Language</Text>
        </TouchableOpacity>

        <TouchableOpacity>       
            <Text>Mobile Application</Text>
        </TouchableOpacity>

        <TouchableOpacity>       
            <Text>Mark's Language</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
      <TouchableOpacity>       
            <Text>SKIP</Text>
        </TouchableOpacity>

        <TouchableOpacity>       
            <Text>NEXT</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
      padding: 15,
      height: '100%', 
  },

  question:{
      marginVertical: 20,
  },

  answer:{
      marginVertical: 15,
      flex: 1,
  },

  button:{
      marginBottom: 15,
      paddingVertical: 15,
      justifyContent:"space-between",
      flexDirection: "row",
  },

});
