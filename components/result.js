
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function result() {
  return (
    <View>

        <View>
            <Text>
                Result
            </Text>
        </View>

        <View style={styles.bannerContainer}>
        <Image 
        source ={{uri:'https://thumbs.dreamstime.com/b/rat-cartoon-character-level-d-rendered-illustration-69157480.jpg'}}
        style={styles.banner}
        resizeMode="contain"
        />
        </View>

        <View style={styles.homebutton}><TouchableOpacity>       
        <Text>Home</Text>
        </TouchableOpacity></View>

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
  