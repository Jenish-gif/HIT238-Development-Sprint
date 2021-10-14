import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from './title';

export default function Home() {
  return (
    <View>

        <Text>HomePage</Text>

        <TouchableOpacity>       
        <Text>Take A Test</Text>
        </TouchableOpacity>

        <TouchableOpacity>       
        <Text>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity>       
        <Text>Your Score</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
  }
});
