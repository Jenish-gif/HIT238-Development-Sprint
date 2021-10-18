import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, TextInput } from 'react-native';
import Form from './form';
import { Formik } from 'formik';

export default function Title() {
  return (
    <View>
        <View style={styles.bannerContainer}>
        <Image 
        source ={{uri:'https://image.shutterstock.com/image-vector/horizontal-banner-hands-people-solving-260nw-1049759054.jpg'}}
        style={styles.banner}
        resizeMode="contain"
        />
        </View>       

        <Form/>

    </View>
    
  );

}
const styles = StyleSheet.create({
  banner:{
      height: 200,
      width: 350,
  },
  bannerContainer:{
      justifyContent: 'center',
      alignItems: "center"
  }

});
