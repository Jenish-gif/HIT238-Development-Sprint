import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Title() {
  return (
    <View>

      <Text>
       QioCo
      </Text>
        
        <View style={styles.bannerContainer}>
        <Image 
        source ={{uri:'https://image.shutterstock.com/image-vector/horizontal-banner-hands-people-solving-260nw-1049759054.jpg'}}
        style={styles.banner}
        resizeMode="contain"
        />
        </View>


    </View>
        

  );
}

const styles = StyleSheet.create({
  banner:{
      height: 300,
      width: 300,
  },
  bannerContainer:{
      justifyContent: 'center',
      alignItems: "center"
  }

});
