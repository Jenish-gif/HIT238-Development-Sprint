import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, View} from 'react-native';
import { Linking } from 'react-native';

const Contact =({navigation}) => {
     return (
    <View style={styles.AppView}>
      
        <View style={styles.below}>
            <Text style={styles.About}>
           Contact Us Here: 
            </Text>
            <Text style={styles.About}>
           s330144@students.cdu.edu.au
            </Text>
        
          
        <Button onPress={() => Linking.openURL('mailto:S330144@students.cdu.edu.au?subject=Query.N-1 QuiCo App') }
      title="Click Here For Queries" />
        </View>


    </View>
    
  );
}

export default Contact;



const styles = StyleSheet.create({
    AppView:{
        position: "absolute", 
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        },
    
    About:{
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        
    },

    below:{
        fontSize: 20, 
        justifyContent:"space-between",
      
       
    },

  
});
