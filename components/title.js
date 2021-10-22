import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, TextInput } from 'react-native';
import { Formik } from 'formik'


const Title =({navigation}) => {
  
    const inputStyle = {
      borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 5,};
   
      return (
    <View>
        <View style={styles.bannerContainer}>
        <Image 
        source ={{uri:'https://image.shutterstock.com/image-vector/horizontal-banner-hands-people-solving-260nw-1049759054.jpg'}}
        style={styles.banner}
        resizeMode="contain"
        />
        </View>   

  
         <Formik
        initialValues={{ 
          name: '',
          email: '', 
          password: '' 
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.name}
              style={inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Name"
            />
            {touched.name && errors.name &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
            }            
            <TextInput
              value={values.email}
              style={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
            <TextInput
              value={values.password}
              style={inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
            }

            <Button
              color="#1b4332"
              title='Start QuiZZing'
              onPress={()=>navigation.navigate('Home') }
            />
          </View>
        )}
      </Formik>
    </View>
    
  );

}

export default Title;

const styles = StyleSheet.create({
  banner:{
      height: 200,
      width: 350,
  },
  bannerContainer:{
      justifyContent: 'center',
      alignItems: "center"
  },

  formContainer: {
    padding: 50,
    backgroundColor: "white",
  },

  inputStyle:{
    backgroundColor: "red",

  }

});
